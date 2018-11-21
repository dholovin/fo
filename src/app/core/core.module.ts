/* Summary: 
   CoreModule exists to orthestrate other modules,   
   make commonly used singleton services available for use in the many other modules
*/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './services/logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CoreRoutingModule } from './core-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Angular Material Anumation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Custom Angular Material UI Components module
import { MaterialModule } from '../material/material.module';

// import { NavComponent } from './nav/nav.component';
// import { SpinnerComponent } from './spinner/spinner.component';
// import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    // as per guide: https://material.angular.io/guide/getting-started 
    // import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules
    BrowserAnimationsModule,    
    MaterialModule,
  ],
  declarations: [
    WelcomeComponent,
    NotFoundComponent,
    /* NavComponent, SpinnerComponent, LoginComponent, HeaderComponent, */
  ],
  exports: [
    RouterModule, /* NavComponent, SpinnerComponent*/
  ],
  providers: [
    LoggerService, /* SpinnerService */
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
