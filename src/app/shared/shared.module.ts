/* Summary: 
   SharedModule is where any shared components, pipes/filters and services will go, there are no views or logic.
   It only contains components that other modules will import to use.
   Non of the services in the SharedModule will be persistent
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule { }