import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class BaseApiService extends HttpClient {
    // API_URL: string  = "/api/";
    //API_URL: string  = "https://localhost:5001/api/";
    API_URL: string  = "http://localhost:5000/api/";
    
    // TODO: FYI, 
    /*
    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
        this.configUrl, { observe: 'response' });
    }

    then subscribe to output
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.config = { ... resp.body };
    });
    */


}
