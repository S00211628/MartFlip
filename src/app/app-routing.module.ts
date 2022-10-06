import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from "./components/deck/deck.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowseComponent } from "./components/browse/browse.component";
import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditDeckComponent } from './components/edit-deck/edit-deck.component';
import { CreateADeckComponent } from './components/create-adeck/create-adeck.component';

const routes: Routes = [
  { path: '', component: CreateADeckComponent, pathMatch: 'full' },
  { path: 'nav', component: NavbarComponent },
  { path: 'deck', component: DeckComponent },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateDeckComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'EditDeck', component: EditDeckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
