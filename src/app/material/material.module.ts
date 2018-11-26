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
  MatTreeModule,
  MatIconModule,
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
    MatTreeModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
