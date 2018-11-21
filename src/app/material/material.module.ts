import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
  ],
})
export class MaterialModule { }
