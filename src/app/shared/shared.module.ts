/* Summary: 
   SharedModule is where any shared components, pipes/filters and services will go, there are no views or logic.
   It only contains components that other modules will import to use.
   Non of the services in the SharedModule will be persistent
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { LoadingComponent } from './components';
import { Globals } from './globals';
import { BaseApiService } from './services';

@NgModule({
  declarations: [
    LoadingComponent,
  ],
  imports: [
    CommonModule,  
    HttpClientModule,  
  ],
  providers: [
    Globals,
    BaseApiService,
  ],
  exports:[
    LoadingComponent,
  ]
})
export class SharedModule { }
