import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://syndom.hu/demo/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http: HttpClient) {}

  public get(endpoint: string): Observable<Object> {
    return this.http.get(AUTH_API.concat(endpoint), httpOptions)
  }

  public post(endpoint: string, obj: any): Observable<Object> {
    return this.http.post(AUTH_API.concat(endpoint), obj, httpOptions)
  }

  public patch(endpoint: string, obj: any): Observable<Object> {
    return this.http.patch(AUTH_API.concat(endpoint), obj, httpOptions)
  }

  public delete(endpoint: string): Observable<Object> {
    return this.http.delete(AUTH_API.concat(endpoint), httpOptions)
  }
}
