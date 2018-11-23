import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPerson } from '../../models';
import { MatTableDataSource, MatSort } from '@angular/material';
import { LoggerService } from '../../../core/services';

@Component({
  selector: 'fo-people-table-view',
  templateUrl: './people-table-view.component.html',
  styleUrls: ['./people-table-view.component.scss']
})
export class PeopleTableViewComponent implements OnInit {
  @Input() public people: IPerson[];
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ['name', 'place', 'note', 'associations'];
  public peopleDataSource: MatTableDataSource<IPerson>;

  
  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.peopleDataSource = new MatTableDataSource(this.people);
    this.peopleDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.peopleDataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
