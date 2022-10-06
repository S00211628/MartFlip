import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from "../../interfaces/Deck";
import { DeckService } from '../../services/deck.service';
import { UserResult } from "../../interfaces/UserResult";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  constructor(private _deckService: DeckService, private _router:Router) {}

  ChosenDeck?: Deck;
  Questions: Array<string> = [];
  Awnsers: Array<string> = [];
  Result:Array<string> = [];

  DeckLoaded:boolean = false;


  index: number = 0;

  ngOnInit(): void {
    this.ChosenDeck = <any>this._deckService.getChosenDeck();
    console.log(this.ChosenDeck);

    if (this.ChosenDeck != undefined) {
      this.ChangeLoadedValue();
      for (let index = 0; index < this.ChosenDeck!.Questions.length; index++) {
        this.Awnsers.push(this.ChosenDeck!.Answers[index]);
        this.Questions.push(this.ChosenDeck!.Questions[index]);
      }
    }
    


    
  }

  ChangeLoadedValue = () =>{
    this.DeckLoaded = true;
  }

  showResult() {
    let answer = document.getElementsByClassName('answer');
    answer[0].classList.toggle('MakeVisible');

    let ShowAnswer = document.getElementsByClassName('DeckAnswerHeader');
    ShowAnswer[0].classList.toggle('MakeVisible');

    let resultsRow = document.getElementsByClassName('results-row');
    resultsRow[0].classList.toggle('MakeVisible');
  }

  setResult(_result:string){
    this.Result.push(_result)
  }

  nextCard(_result:string) {

    this.setResult(_result)

    if (this.index == this.ChosenDeck?.Questions.length) {
    } else {
      this.index++;
      this.showResult();
    }
  }

  backToBrowse(){
    this.updateUserResult()
    this._router.navigate(['/','browse'])
  }

  updateUserResult(){
    this._deckService.updateUserResult(this.Result)
  }
}
