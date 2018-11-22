import { Component, OnInit } from '@angular/core';
import { IPerson, PeopleViewMode } from '../../models';
import { PeopleApiService } from '../../serices';
import { Observable } from 'rxjs';

@Component({
  selector: 'fo-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleApiService: PeopleApiService) { }

  public people: IPerson[];
  public peopleViewMode = PeopleViewMode;
  public viewMode: PeopleViewMode = PeopleViewMode.Card;

  ngOnInit() {
    this.peopleApiService.GetPeople()
      .subscribe((people: IPerson[]) => {
        this.people = people;
      },
        (error: any) => {
          // TODO: handle errors
        })
  }
}
