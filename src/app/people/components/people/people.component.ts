import { Component, OnInit } from '@angular/core';
import { IPerson, PeopleViewMode } from '../../models';

@Component({
  selector: 'fo-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  public people: IPerson[] = [];
  public peopleViewMode = PeopleViewMode;
  public viewMode: PeopleViewMode = PeopleViewMode.Card;

  ngOnInit() {
  }

}
