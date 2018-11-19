import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  constructor (private loggerService: LoggerService){
  }  

  public title = "fo";
  public linkUrl;
  private someParam = 1;

  ngOnInit() {
    this.loggerService.log('LoggerService in action');
    
    this.linkUrl = this.getUrlValueFromDb();
  }

  private getUrlValueFromDb(): string {
    return `https://angular.io/tutorial/${this.someParam}`;

    // return "https://angular.io/tutorial/{{someParam}}";
  }
}
