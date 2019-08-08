import { NgModule } from "@angular/core";
import { ReminderViewComponent } from "./components/reminder-view/reminder-view.component";
import { RemindersRoutingModule } from "./reminders-routing.module";
import { SharedModule } from "../shared/shared.module";
import { RemindersApiService } from "./services";

@NgModule({
  declarations: [
    ReminderViewComponent,
  ],
  providers: [
    RemindersApiService,
  ],
  imports: [
    SharedModule,   // custom shared components
    RemindersRoutingModule,
    // MaterialModule, // Angular Material Design components
  ]
})
export class RemindersModule { }
