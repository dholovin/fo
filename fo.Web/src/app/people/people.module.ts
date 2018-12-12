import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";
import { PeopleRoutingModule } from "./people-routing.module";
import { PeopleComponent, PeopleTableViewComponent, PeopleTreeViewComponent } from "./components";
import { PeopleApiService } from "./services";
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleTableViewComponent,
    PeopleTreeViewComponent,
    PersonDetailComponent,
  ],
  providers: [
    PeopleApiService,
  ],
  imports: [
    SharedModule,   // custom shared components
    PeopleRoutingModule,
    MaterialModule, // Angular Material Design components
  ]
})
export class PeopleModule { }
