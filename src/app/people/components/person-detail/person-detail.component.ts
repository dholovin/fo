import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IPerson } from "../../models";
import { PeopleApiService } from "../../serices";
import { finalize } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "fo-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  public id: number;
  public isViewMode: boolean;
  public person: IPerson;
  public isBusy: boolean = false;
  public recordFound: boolean = false;
  public personForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private peopleApiService: PeopleApiService) { }

  ngOnInit() {
    this.personForm = new FormGroup({
      name: new FormControl("", Validators.required),
      place: new FormControl("", Validators.required),
      date: new FormControl(""),
      note: new FormControl(""),
      associations: new FormControl(""),
    });

    this.id = +this.route.snapshot.paramMap.get("id");
    this.isViewMode = !!this.id;

    if (this.id) {
      this.loadPersonDetails(this.id);
    }
  }

  private loadPersonDetails(id: number): void {
    this.isBusy = true;
    this.peopleApiService.getPerson(id)
      .pipe(finalize(() => {
        this.isBusy = false;
      }))
      .subscribe((person: IPerson) => {
        if (!person) {
          this.recordFound = false;
        } else {
          this.person = person;
          this.recordFound = true;
        }
      }, (error: any) => {
        // TODO: handle errors
      })
  }
}
