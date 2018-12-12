import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { Observable, of as observableOf } from "rxjs";
import { finalize } from "rxjs/operators";
import { IPerson, PersonFlatNode, PersonNode } from "../../models";
import { PeopleTreeViewService, PeopleApiService } from "../../services";
import { LoggerService } from "../../../core/services";

@Component({
  selector: "fo-people-tree-view",
  templateUrl: "./people-tree-view.component.html",
  styleUrls: ["./people-tree-view.component.scss"],
  providers: [PeopleTreeViewService],
})
export class PeopleTreeViewComponent implements OnInit, OnDestroy {
  public people: IPerson[];
  public isBusy: boolean = false;

  public treeControl: FlatTreeControl<PersonFlatNode>;
  public treeFlattener: MatTreeFlattener<PersonNode, PersonFlatNode>;
  public dataSource: MatTreeFlatDataSource<PersonNode, PersonFlatNode>;

  private _getLevel = (node: PersonFlatNode) => node.level;
  private _isExpandable = (node: PersonFlatNode) => node.expandable;
  private _getChildren = (node: PersonNode): Observable<PersonNode[]> => observableOf(node.children);

  constructor(
    private loggerService: LoggerService,
    private peopleTreeViewService: PeopleTreeViewService,
    private peopleApiService: PeopleApiService) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<PersonFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit() {
    // subscribe to data source changes
    this.peopleTreeViewService.$dataChange.subscribe(data => this.dataSource.data = data);

    this.isBusy = true;
    this.peopleApiService.getPeople()
      .pipe(finalize(() => {
        this.isBusy = false;
      }))
      .subscribe((people: IPerson[]) => {
        this.people = people;

        // rebuild the tree
        this.peopleTreeViewService.buildPersonTree(this.people);
      }, (error: any) => {
        // TODO: handle errors
      })
  }

  ngOnDestroy(): void {
    this.peopleTreeViewService.$dataChange.unsubscribe();
  }

  public transformer = (node: PersonNode, level: number) => {
    const flatNode = new PersonFlatNode(!!node.children, level, node.association, node.id, node.name, node.place);
    // this.loggerService.log(flatNode);
    return flatNode;
  }

  public hasChild = (_: number, _nodeData: PersonFlatNode) => _nodeData.expandable;

  public applyFilter(filterValue: string) {
    this.peopleTreeViewService.buildPersonTree(this.people, filterValue.trim().toLowerCase());
  }

  public delete(id: number) {
    if (confirm("Are you sure you want to delete?")) {
      this.isBusy = true;
      this.peopleApiService.deletePerson(id)
        .pipe(finalize(() => {
          this.isBusy = false;
        }))
        .subscribe((people: IPerson[]) => {
          this.people = people;

          // rebuild the tree
          this.peopleTreeViewService.buildPersonTree(this.people);
        }, (error: any) => {
          // TODO: handle errors
        });
    }
  }
}
