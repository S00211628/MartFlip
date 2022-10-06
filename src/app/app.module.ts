import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeckComponent } from './components/deck/deck.component';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { FirebaseTSApp } from "firebasets/firebasetsApp/firebaseTSApp";
import { environment } from '../environments/environment';
import { DeckService } from './services/deck.service';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { CreateDeckComponent } from './components/create-deck/create-deck.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { EditDeckComponent } from './components/edit-deck/edit-deck.component';
import { CreateADeckComponent } from './components/create-adeck/create-adeck.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeckComponent,
    HomeComponent,
    BrowseComponent,
    CreateDeckComponent,
    LoginComponent,
    LogoutComponent,
    EditDeckComponent,
    CreateADeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    
  ],
  providers: [DeckService, FirebaseTSFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig)
  }
}
