import { Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RetrieveItemsService {
  localhost = 'http://localhost:8080/NetworkBackEnd/';

  constructor(private http: Http) { }

  getItems(){
    console.log("went into getItems function"); 
    return this.http.get(this.localhost + "RetrieveItems");
  }
  getUsers(){

  }
}
