import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
const projectItems: string = "./assets/list-items.json";

@Injectable ()
export class ProjectItemsService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]>{
    return this.http
      .get(projectItems)
      .catch((error: any) => Observable.throw(error));
  }
}
