import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

declare const window: any;

@Injectable()
export class PeopleFilterStateService {
  private $filterStringChanged = new BehaviorSubject<string>("");

  get filterString() {
    return this.$filterStringChanged.asObservable();
  }

  constructor() {  }

  public savePeopleFilterState(filterValue: string) {
    this.$filterStringChanged.next(filterValue);
  }
}
