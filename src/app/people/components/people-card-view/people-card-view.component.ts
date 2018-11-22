import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../models';

@Component({
  selector: 'fo-people-card-view',
  templateUrl: './people-card-view.component.html',
  styleUrls: ['./people-card-view.component.scss']
})
export class PeopleCardViewComponent implements OnInit {
  @Input() public people: IPerson[];

  constructor() { }

  ngOnInit() {
  }

}
