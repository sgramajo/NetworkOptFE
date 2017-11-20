import { Component, OnInit } from '@angular/core';

import { RetrieveItemsService } from '../services/retrieve-items.service';


@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {
 items = [];
  allUsers = [];  
  selectedIndividual: String; 
  itemData = {info: null, reviews: []};  
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
    this.itemData = null; 
    this.dbService.getItems().subscribe(items=>{
      this.items = items.json(); 
    });
    this.dbService.getUsers().subscribe(users=>{
      this.allUsers = users.json();  
    }); 
  }

  itemInfo(itemID){
    this.dbService.getOneItem(itemID).subscribe(item=>{
      console.log(item.json()); 
      this.itemData = item.json(); 
    });
  }

  setUser(user){
    this.selectedIndividual = user; 
  }

}