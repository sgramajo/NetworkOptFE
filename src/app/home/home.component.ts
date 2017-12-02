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
  reviewers =["Rebeca","Stacy","Melissa","Ashton","Jessica","Pom","Minoska","Luis","Martha","Ezequiel"]; 
  movies = ["Mulan","Moana","Hercules","Pocahontas","Zootopia","Meet the Robinsons", "The Jungle Book",
          "Atlantis The Lost Empire", "Alice Through the Looking Glass", "Chicken Little", "Holes", "Stitch the Movie",
          "Tarzan", "The Fox and The Hound", "The Lion King", "Frozen", "Beauty and the Beast", "Snow White and the Seven Dwarves", "Tangled", "Bambi", "Pinocchio", "Toy Story", "Sleeping Beauty", "Dumbo"]; 
  reviews = [];
  missingReviews = []; 
  globalReviews = []; 
  collaborativeReviews = []; 
  
  constructor(private dbService: RetrieveItemsService) { }

  ngOnInit() {
    this.dbService.getAccuracy().subscribe(accuracy=>{
      var temp = accuracy.json();
      console.log(temp);  
      this.reviews = temp.actualData;
      this.missingReviews = temp.missingData;
      this.globalReviews = temp.globalResults; 
      this.collaborativeReviews = temp.collaborativeResults;    
    }); 
  }
}