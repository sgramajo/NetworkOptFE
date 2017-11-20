import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { UsersComponent} from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { RetrieveItemsService } from './services/retrieve-items.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent}, //home
  { path: "items", component: ItemsComponent }, //items
  { path: "users", component: UsersComponent } //users
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItemsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RetrieveItemsService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
