import { Component, OnInit } from '@angular/core';
import { RetrieveItemsService } from '../services/retrieve-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [];
  allUsers = [];  
  selectedIndividual: String; 
  itemData = {info: null, reviews: []};  
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
  
}
}