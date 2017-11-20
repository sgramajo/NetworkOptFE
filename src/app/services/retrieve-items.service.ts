import { Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RetrieveItemsService {
  localhost = 'http://localhost:8080/NetworkOptBE/';

  constructor(private http: Http) { }

  getItems(){
    return this.http.get(this.localhost + "RetrieveItems");
  }
  getUsers(){
    //the second parameter is necessary since this is a post
    return this.http.post(this.localhost + "RetrieveItems", null); 
  }
  getOneItem(itemID){ 
    //get ALL information for a particular item
    return this.http.get(this.localhost + "ItemData?itemID="+ itemID); 
  }
 
}
