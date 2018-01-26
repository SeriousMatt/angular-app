import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ProjectItemsService } from "./project-items.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProjectItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
