import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent, PeopleTableViewComponent, PeopleCardViewComponent } from './components';
import { PeopleApiService } from './serices';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleTableViewComponent,
    PeopleCardViewComponent,
  ],
  providers: [
    PeopleApiService,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule,
  ]
})
export class PeopleModule { }
