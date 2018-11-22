import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent, PeopleTableViewComponent,  PeopleCardViewComponent} from './components';

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleTableViewComponent,
    PeopleCardViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule,
  ]
})
export class PeopleModule { }
