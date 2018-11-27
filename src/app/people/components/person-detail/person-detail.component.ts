import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "fo-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  public id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");

    console.log(this.id);
  }

}
