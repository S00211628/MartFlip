import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { PotDeckInfo } from "../../interfaces/PotDeck";
import { Deck } from 'src/app/interfaces/Deck';
import { from, interval, timeInterval } from 'rxjs';
import { Navigation, Router } from "@angular/router";

import { GenreService } from '../../services/genre.service';
import { Genre } from 'src/app/interfaces/Genre';



@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css'],
})
export class CreateDeckComponent implements OnInit {
  PotAnswers: Array<string> = [];
  PotQuestions: Array<string> = [];
  numberOfPotQnAs: number = 1;
  Genres!:Genre[];
  OtherGenres!:Genre[];

  DeckName!: string;
  DeckDes!: string;
  DeckThumb!:string;
  DeckGenre!:string;

  _deckToAdd: Deck = {
    Answers: [],
    Description: '',
    Name: '',
    Questions: [],
    UserResult: [],
    Thumbnail: '',
    Id: '',
    Genre:''
  };

  noPotDecks: Array<number> = [1];
  index: number = 0;

  constructor(private _deckSerivce: DeckService, private _router: Router, private _genreService: GenreService) {}

  async ngOnInit(){

    console.log(await this._genreService.GetGenres());
    this.Genres = await this._genreService.GetGenres();
  }

  addDeck() {
    this._deckToAdd.Answers = this.PotAnswers;
    this._deckToAdd.Questions = this.PotQuestions;
    this._deckToAdd.Name = this.DeckName;
    this._deckToAdd.Description = this.DeckDes;
    this._deckToAdd.Thumbnail = this.DeckThumb;
    this._deckToAdd.Id = this.getRandomId();
    this._deckToAdd.UserResult = [];
    this._deckToAdd.Genre = this.DeckGenre;


    this._deckSerivce.addDeck(this._deckToAdd)
    alert('Deck Created!!!');
    this._router.navigate(['/', 'browse']);
  }

  getRandomId(){
     return '_' + Math.random().toString(36).substr(2, 9);
  }

  addQuestion() {
    if (
      this.PotAnswers[this.index] != null &&
      this.PotQuestions[this.index] != null
    ) {
      this.noPotDecks.push(this.noPotDecks[this.index]);
      this.index++;
    } else {
      alert('Fill out your curreny QnAs before add another one');
    }
  }

  QuestionInput(str?: any) {
    this.PotQuestions[this.index] = str?.target.value;
  }

  ThumbNailInput(str?:any){
    this.DeckThumb = str?.target.value;
  }

  AnswerInput(str?: any) {
    this.PotAnswers[this.index] = str?.target.value;
  }

  DeckNameInput(str?: any) {
    this.DeckName = str?.target.value;
  }

  GenreInput(str?:any) {
    this.DeckGenre = str?.target.value;
  }

  DescriptionInput(str?: any) {
    this.DeckDes = str?.target.value;
  }
}
