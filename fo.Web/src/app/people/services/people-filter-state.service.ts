import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

declare const window: any;

@Injectable()
export class PeopleFilterStateService {
  private $filterStringChanged = new Subject<string>();

  get filterString() {
    return this.$filterStringChanged.asObservable();
  }

  constructor() {  }

  public savePeopleFilterState(filterValue: string) {
    this.$filterStringChanged.next(filterValue);
  }
}
