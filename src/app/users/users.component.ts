import { Component, OnInit } from '@angular/core';

import { RetrieveItemsService } from '../services/retrieve-items.service';


@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];  
  items = []; 
  selectedIndividual: String; 
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
    this.dbService.getUsers().subscribe(users=>{
      this.users = users.json();  
    }); 
  }
  getRecommendedItems(user, userID){
    this.selectedIndividual = user; 
    this.dbService.getRecommendedItems(userID).subscribe(items=>{
      this.items = items.json(); 
      //console.log(this.items); 
    }); 
  }
}
