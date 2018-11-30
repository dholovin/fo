import { Component, OnInit, Input } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { IPerson, IUpsertPerson } from "../../models";
import { PeopleApiService } from "../../serices";
import { Globals } from "../../../shared/globals"; // comes from Shared NgModule

@Component({
  selector: "fo-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.scss"]
})
export class PersonDetailComponent implements OnInit {
  public id: number;
  public isViewMode: boolean = false;   // TODO: introduce enum for the record mode { Create|View|Edit } ?
  public isCreateMode: boolean = false; // TODO: introduce enum for the record mode { Create|View|Edit } ?

  // Association input properties - start
  public visible = true;
  public associationSelectable = true;
  public associationRemovable = true;
  public addAssociationOnBlur = true;
  readonly associationsSeparatorKeyCodes: number[] = [ENTER, COMMA];
  // Association input properties - end

  public person: IPerson;
  public isBusy: boolean = false;
  public recordFound: boolean = false;

  public personForm: FormGroup;
  public get nameField() { return this.personForm.get("name"); }
  public get placeField() { return this.personForm.get("place"); }
  public get dateField() { return this.personForm.get("date"); }

  constructor(
    private globals: Globals,
    private route: ActivatedRoute,
    private location: Location,
    private peopleApiService: PeopleApiService) { }

  ngOnInit() {
    this.personForm = new FormGroup({
      name: new FormControl("", Validators.required),
      place: new FormControl("", Validators.required),
      // date: new FormControl({ disabled: true }), // TODO: check how to disable manual input but leave popup
      date: new FormControl(""),
      note: new FormControl(""),
      associations: new FormControl(""),
    });

    this.id = +this.route.snapshot.paramMap.get("id");
    this.isCreateMode = !(!!this.id);
    // TODO: don't we want viewOnly mode/component?
    // this.isViewMode = !!this.id;

    if (!this.isCreateMode) {
      // View / Edit
      this.loadPersonDetails(this.id);
    } else {
      this.person = { associations: [] };
      // Create
    }
  }

  public disableFutureDates(selectedDate: Date): boolean {
    return selectedDate.getTime() <= new Date().getTime();
  }

  public addAssociation(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || "").trim()) {
      // TODO: Fix a bug in Create mode - new associations are not proparated to the formControl
      this.person.associations.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  public removeAssociation(association: string): void {
    if (this.person.associations) {
      const index = this.person.associations.indexOf(association);

      if (index >= 0) {
        this.person.associations.splice(index, 1);
      }
    }
  }

  public back() {
    this.location.back();
  }

  public save() {
    let formData = this.globals.deepCopy(this.personForm.value);

    const person: IUpsertPerson = {
      name: formData["name"],
      place: formData["place"],
      date: formData["date"],
      note: formData["note"],
      associations: formData["associations"],
    }

    let action: Observable<IPerson[]>;
    if (this.isCreateMode) {
      // TODO: implement functionality
      console.log("Creating...")
      console.log(person)
      // action = this.peopleApiService.createPerson(person);
    } else {
      // TODO: implement functionality
      // action = this.peopleApiService.updatePerson(this.id, person);
      console.log("Updating...")
      console.log(person)
    }

    // this.isBusy = true;
    // action.subscribe((people: IPerson[]) => {
    //   // TODO: redirect back to appropriate location, will this preserve component state (filter params)?
    //   this.location.back();
    // }, (error: any) => {
    //   this.isBusy = false;
    //   this.personForm.markAsPristine();
    //   // TODO: handle errors
    // })
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
          this.recordFound = true;

          this.person = person;
          this.updatePersonForm(person);
        }
      }, (error: any) => {
        // TODO: handle errors
      })
  }

  private updatePersonForm(person: IPerson) {
    this.personForm.reset(person);
  }
}
