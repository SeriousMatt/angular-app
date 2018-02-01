import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjectItemsService} from "../project-items.service";
interface ItemsResponse {
  results: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any [];
  title = 'Cord Prototype';

  constructor(private ProjectItemsService: ProjectItemsService) { }

  ngOnInit() {
    this.ProjectItemsService.getProjects()
      .subscribe(
        projects => {
          this.projects = projects;
        }
      );
  }
}
