import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../shared/globals'; // comes from Shared NgModule

@Component({
  selector: 'fo-reminder-view.component',
  templateUrl: './reminder-view.component.html',
  styleUrls: ['./reminder-view.component.scss']
})
export class ReminderViewComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
    var test = this.globals.deepCopy({asd:"asd"});
  }

}
