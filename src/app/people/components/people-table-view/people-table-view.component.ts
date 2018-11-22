import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../models';

@Component({
  selector: 'fo-people-table-view',
  templateUrl: './people-table-view.component.html',
  styleUrls: ['./people-table-view.component.scss']
})
export class PeopleTableViewComponent implements OnInit {
  @Input() public people: IPerson[];
  constructor() { }

  ngOnInit() {
  }

}
