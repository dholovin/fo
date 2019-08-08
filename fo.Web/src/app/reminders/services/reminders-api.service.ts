import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerService, BaseApiService } from "../../core/services";

import { IPerson } from "../../people/models"; // TODO: should not reference types within People module

@Injectable()
export class RemindersApiService {
    constructor(private baseApiService: BaseApiService,
        private loggerService: LoggerService) {        
    }

    public getPeople(): Observable<IPerson[]> {
        return this.baseApiService.get<IPerson[]>(this.baseApiService.API_URL + "people");
    }
}
