import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { HostListener } from "@angular/core";
import { MatTableDataSource, MatSort } from "@angular/material";
import { IPerson } from "../../models";
import { LoggerService } from "../../../core/services";

@Component({
  selector: "fo-people-table-view",
  templateUrl: "./people-table-view.component.html",
  styleUrls: ["./people-table-view.component.scss"]
})
export class PeopleTableViewComponent implements OnInit {
  @Input() public people: IPerson[];
  @ViewChild(MatSort) sort: MatSort;

  public columnDefinitions = [
    { def: "name", showMobile: true },
    { def: "place", showMobile: true },
    { def: "note", showMobile: true },
    { def: "associations", showMobile: false }
  ];
  private isMobile: boolean = false;

  public peopleDataSource: MatTableDataSource<IPerson>;

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.peopleDataSource = new MatTableDataSource(this.people);
    this.peopleDataSource.sort = this.sort;
    this.getDisplayedColumns();
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
}
