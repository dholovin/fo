import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "fo-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  @Input() public id: number;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
