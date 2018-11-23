import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatTooltipModule, 
  MatRadioModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
  ],
})
export class MaterialModule { }
