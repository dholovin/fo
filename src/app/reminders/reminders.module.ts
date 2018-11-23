import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderViewComponent } from './components/reminder-view/reminder-view.component';
import { RemindersRoutingModule } from './reminders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReminderViewComponent 
  ],
  imports: [
    CommonModule,   // ngIf, ngFor, etc...
    // FormsModule,    // ngModel for templates-driven forms, 
    // MaterialModule, // Angular Material Design components
    SharedModule,   // custom shared components
    RemindersRoutingModule,    
  ]
})
export class RemindersModule { }
