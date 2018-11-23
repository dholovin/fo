import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent, PeopleTableViewComponent, PeopleTreeViewComponent } from './components';
import { PeopleApiService } from './serices';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleTableViewComponent,
    PeopleTreeViewComponent,
  ],
  providers: [
    PeopleApiService,
  ],
  imports: [
    CommonModule,   // ngIf, ngFor, etc...
    FormsModule,    // ngModel for templates-driven forms, 
    MaterialModule, // Angular Material Design components
    SharedModule,   // custom shared components
    PeopleRoutingModule,
  ]
})
export class PeopleModule { }
