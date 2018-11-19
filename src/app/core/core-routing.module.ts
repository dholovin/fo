import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'reminders', loadChildren: '../reminders/reminders.module#RemindersModule' },
  { path: '**', component: NotFoundComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'admin', canActivate: [AuthGuardService], loadChildren: '../admin/admin.module#AdminModule' },
  // { path: 'form', loadChildren: '../form/form.module#FormModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
