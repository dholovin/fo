import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../models';

@Component({
  selector: 'fo-people-tree-view',
  templateUrl: './people-tree-view.component.html',
  styleUrls: ['./people-tree-view.component.scss']
})
export class PeopleTreeViewComponent implements OnInit {
  @Input() public people: IPerson[];

  constructor() { }

  ngOnInit() {
  }

}
