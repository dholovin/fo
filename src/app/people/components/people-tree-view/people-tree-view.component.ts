import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IPerson, PersonFlatNode, PersonNode } from '../../models';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable, of as observableOf } from 'rxjs';
import { PeopleTreeViewService } from './people-tree-view.service';
import { LoggerService } from '../../../core/services';

@Component({
  selector: 'fo-people-tree-view',
  templateUrl: './people-tree-view.component.html',
  styleUrls: ['./people-tree-view.component.scss'],
  providers: [PeopleTreeViewService],
})
export class PeopleTreeViewComponent implements OnInit, OnDestroy {
  @Input() public people: IPerson[];

  private _getLevel = (node: PersonFlatNode) => node.level;
  private _isExpandable = (node: PersonFlatNode) => node.expandable;
  private _getChildren = (node: PersonNode): Observable<PersonNode[]> => observableOf(node.children);  
  
  public treeControl: FlatTreeControl<PersonFlatNode>;
  public treeFlattener: MatTreeFlattener<PersonNode, PersonFlatNode>;
  public dataSource: MatTreeFlatDataSource<PersonNode, PersonFlatNode>;

  constructor(
    private loggerService: LoggerService,
    private peopleTreeViewService: PeopleTreeViewService) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<PersonFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit() {
    this.peopleTreeViewService.$dataChange.subscribe(data => this.dataSource.data = data);
    
    this.peopleTreeViewService.buildPersonTree(this.people, 0);
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
  
  // public applyFilter(filterValue: string) {    
  //   this.peopleDataSource.filter = filterValue.trim().toLowerCase();
    
  //   this.peopleTreeViewService.buildPersonTree(this.people, 0);
  // }  
}