import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class BaseApiService extends HttpClient {
}
