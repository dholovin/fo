import { Component, OnInit } from '@angular/core';
import { IPerson, PeopleViewMode } from '../../models';
import { PeopleApiService } from '../../serices';
import { LoggerService } from '../../../core/services/logger.service';

@Component({
  selector: 'fo-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
    private peopleApiService: PeopleApiService) { }

  public people: IPerson[];
  public PeopleViewMode = PeopleViewMode;
  public viewMode: PeopleViewMode = PeopleViewMode.Table;
  
  ngOnInit() {
    this.loggerService.log(`viewMode:  ${this.viewMode.toString()}`);

    this.peopleApiService.GetPeople()
      .subscribe((people: IPerson[]) => {
        this.people = people;
      },
        (error: any) => {
          // TODO: handle errors
        })
  }
}
