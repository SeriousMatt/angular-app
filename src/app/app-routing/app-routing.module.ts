import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from '../app.component';
import { ProjectsComponent} from "../projects/projects.component";
import {ProjectItemsService} from "../project-items.service";

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'api/items', component: AppComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
