import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  // { path: "admin", canActivate: [AuthGuardService], loadChildren: "../admin/admin.module#AdminModule" },
  { 
    path: "reminders", 
    // loadChildren: "../reminders/reminders.module#RemindersModule" // Angular v7
    loadChildren: () => import("../reminders/reminders.module").then(m => m.RemindersModule)  // Angular v8
  },  
  { 
    path: "people", 
    loadChildren: "../people/people.module#PeopleModule" // Angular v7
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
