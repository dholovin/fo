import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { HostListener } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { finalize } from "rxjs/operators";
import { IPerson } from "../../models";
import { PeopleApiService, PeopleFilterStateService } from "../../services";
import { LoggerService } from "../../../core/services";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "fo-people-table-view",
  templateUrl: "./people-table-view.component.html",
  styleUrls: ["./people-table-view.component.scss"]
})
export class PeopleTableViewComponent implements OnInit {
  public people: IPerson[];
  public isBusy: boolean = false;
  public filterString: string;

  @ViewChild(MatSort) sort: MatSort;
  public peopleDataSource: MatTableDataSource<IPerson>;
  public columnDefinitions = [
    { def: "name", showMobile: true },
    { def: "place", showMobile: true },
    { def: "note", showMobile: true },
    { def: "associations", showMobile: false },
    { def: "toolbar", showMobile: true },
  ];

  private isMobile: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private peopleApiService: PeopleApiService,
    private router: Router,
    private peopleFilterStateService: PeopleFilterStateService) { }

  ngOnInit() {

    // Save people filter parameters when navigating away
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.filterString) {
            this.peopleFilterStateService.savePeopleFilterState(this.filterString);
          }
        }
      });

    // Load people data
    this.isBusy = true;
    this.peopleApiService.getPeople()
      .pipe(finalize(() => {
        this.isBusy = false;
      }))
      .subscribe((people: IPerson[]) => {
        this.people = people;

        // re-build the Table
        this.peopleDataSource = new MatTableDataSource(this.people);
        this.peopleDataSource.sort = this.sort;
        this.getDisplayedColumns();

        // Restore people filter value when loading the page and filter value existed
        this.peopleFilterStateService.filterString
          .subscribe((filterString: string) => {
            this.filterString = filterString;
            this.applyFilter(filterString;
          });
      }, (error: any) => {
        // TODO: handle errors
      });
  }

  public applyFilter(filterValue: string) {
    this.peopleDataSource.filter = filterValue.trim().toLowerCase();
  }

  @HostListener("window:resize", ["$event"]) onResize(event?) {
    this.getDisplayedColumns();
  }

  public getDisplayedColumns(): string[] {
    // TODO: extract global function isLargeScreenDevice(window.innerWidth)
    this.isMobile = +window.innerWidth < 768;

    return this.columnDefinitions
      .filter(cd => !this.isMobile || cd.showMobile)
      .map(cd => cd.def);
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
          // re-build the Table
          this.peopleDataSource = new MatTableDataSource(this.people);
        }, (error: any) => {
          // TODO: handle errors
        });
    }
  }
}
