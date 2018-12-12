import { Component, OnInit } from "@angular/core";
import { PeopleViewMode } from "../../models";
import { LoggerService } from "../../../core/services";

@Component({
  selector: "fo-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  public PeopleViewMode = PeopleViewMode;
  public viewMode: PeopleViewMode = PeopleViewMode.Table;

  ngOnInit() {
  }
}
