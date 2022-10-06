import { Injectable } from '@angular/core';
import { FirebaseTSFirestore, Where } from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { Router,NavigationStart } from "@angular/router";
import { Deck } from '.././interfaces/Deck'
import { PotDeckInfo } from ".././interfaces/PotDeck";
import { UserResult } from ".././interfaces/UserResult";
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(private firestore: FirebaseTSFirestore) {}
  ChosenDeck?: Deck;
  DocIDArray?:Array <string> = [];
  AllDecks:Array <Deck> = [];
  


  // decksref: Array<Deck> = [];

  async getAllDecks() {
    const decksref: Array<Deck> = [];
    this.firestore.getCollection({
      path: ['Decks'],
      where: [],
      onComplete: (result) => {
        for (let index = 0; index < result.docs.length; index++) {
          // this.decksref?.push(<Deck>result.docs[index].data());
          decksref?.push(<Deck>result.docs[index].data()); 
        }
      },
      onFail: (err) => {},
    });

    return decksref;
  }

  setChosenDeck(_chosenDeck: Deck) {
    this.ChosenDeck = _chosenDeck;
  }

  getChosenDeck() {
    return this.ChosenDeck;
  }

  updateUserResult(_userResult: Array<string>) {
    this.firestore.update({
      path: ['Decks', <string>this.ChosenDeck?.Id],
      data: { UserResult: _userResult },
      onComplete: (docref) => {},
      onFail: (err) => {},
    });
  }

   addDeck(_deckToAdd:Deck)
  {
    const _deck:Deck = _deckToAdd;

    this.firestore.create({
      path: ['Decks', _deckToAdd.Id],
      data: _deckToAdd,
      onComplete(docId) {
      },
    })

  }

   updateDecID(_DeckID:string)
  {
    this.firestore.update({
      path: ['Decks', _DeckID],
      data: {Id:_DeckID},
      onComplete:()=>{

      },
      onFail:(err) => {

      }
    })
  }




  async FillGenresArray(){

    this.AllDecks = await this.getAllDecks();

  }

  
}
