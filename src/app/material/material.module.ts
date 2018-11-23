import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatTooltipModule, 
  MatChipsModule,
  MatRadioModule,
  MatDividerModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
  ],
})
export class MaterialModule { }
