import { Component, OnInit } from "@angular/core";
import { IPerson, PeopleViewMode } from "../../models";
import { PeopleApiService } from "../../serices";
import { LoggerService } from "../../../core/services";

@Component({
  selector: "fo-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
    private peopleApiService: PeopleApiService) { }

  public people: IPerson[];
  public PeopleViewMode = PeopleViewMode;
  public viewMode: PeopleViewMode = PeopleViewMode.Tree;

  // TODO: back navigation: save viewMode & filterText
  ngOnInit() {
    this.peopleApiService.getPeople()
      .subscribe((people: IPerson[]) => {
        this.people = people;
      }, (error: any) => {
        // TODO: handle errors
      })
  }
}
