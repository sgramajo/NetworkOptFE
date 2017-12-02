import { Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { Headers, Http, URLSearchParams } from '@angular/http';
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
 
 getRatings(itemID, userID){
    let data = new URLSearchParams();
    data.append('itemID', itemID);
    data.append('userID', userID);
    return this.http.post(this.localhost + "ItemData", data);
     
 }
 getAccuracy(){
   return this.http.post(this.localhost + "AccuracyResult", null); 
 }
 getRecommendedItems(userID){
   return this.http.get(this.localhost + "AccuracyResult?userID=" + userID); 
 }
}
