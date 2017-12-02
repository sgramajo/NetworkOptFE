import { Component, OnInit } from '@angular/core';
import { RetrieveItemsService } from '../services/retrieve-items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = [];
  allUsers = [];  
  selectedIndividual: String; 
 
  //for an individual item in the popup section 
  title: ""; 
  reviews = [];
  itemID: any; 
  globalBaseline: any; 
  collaborativeFiltering: any; 
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
    this.dbService.getItems().subscribe(items=>{
      this.items = items.json(); 
    });
    this.dbService.getUsers().subscribe(users=>{
      this.allUsers = users.json();  
    }); 
  }

  itemInfo(itemID){
    this.dbService.getOneItem(itemID).subscribe(item=>{
      var temp = item.json();
      this.itemID = temp.info.asin; 
      this.title = temp.info.title;
      this.reviews = temp.reviews; 
    });
    
  }

  setUser(name, id){
    this.selectedIndividual = name; 
    this.dbService.getRatings(this.itemID, id).subscribe(rating=>{
      var temp = rating.json(); 
      this.globalBaseline = temp.globalScore;
      this.collaborativeFiltering = temp.collaborativeFiltering;   
    }); 
  }

}
