import { Component, OnInit } from "@angular/core";
import { Globals, OnlineOfflineService, LoggerService} from "../../../core/services"; // comes from Core NgModule
import { RemindersApiService } from "../../services/reminders-api.service";

import { IPerson } from "../../../people/models"; // TODO: should not reference types within People module
import { Observable } from "rxjs";

@Component({
  selector: "fo-reminder-view.component",
  templateUrl: "./reminder-view.component.html",
  styleUrls: ["./reminder-view.component.scss"]
})
export class ReminderViewComponent implements OnInit {
  public result: any;

  constructor(private globals: Globals,
    private onlineOfflineService: OnlineOfflineService,
    private remindersApiService: RemindersApiService,
    private loggerService: LoggerService) { }

  ngOnInit() {
    this.onlineOfflineService.connectionChanged.subscribe(online => {
      if (online) {
        this.loggerService.log("went online");
        this.loggerService.log("sending all stored items");
      } else {
        this.loggerService.log("went offline, storing in indexdb");
      }
    });

  }

  public test() {  
    // this.testDeepCopying();

    this.testHttpCalls();
  }

  private testDeepCopying() {
    let sourceObj = { arr: [{ item : "item1"}, {item : "item2"}] };
    const targetObj = this.globals.deepCopy(sourceObj);
    sourceObj.arr[0].item = "modified item 1";
    
    this.loggerService.log(sourceObj);
    this.loggerService.log(targetObj);
  }

  private testHttpCalls() {
    this.remindersApiService.getPeople()    
      .subscribe((people: IPerson[]) => {
        this.loggerService.log("COMPONENT");
        this.loggerService.log(people);

         // clone the 'people' object into result which may use its known shape
        this.result = { ...people };

      }, (error: any) => {
        this.loggerService.log(error);
      });
  }
}
