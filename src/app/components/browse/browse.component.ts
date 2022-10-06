import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Router,NavigationStart } from "@angular/router";
import { Deck } from "../../interfaces/Deck";

import { DeckService } from "../../services/deck.service";


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  decksref: Array<Deck> = [];
  AllDecks: Array<Deck> = [];

  constructor(private router: Router, private _deckService: DeckService) {}

  async ngOnInit() {


    this.decksref = await this._deckService.getAllDecks();

    this._deckService.FillGenresArray();
  }

  setChosenDeck(index: number) {
    this.router.navigate(['/', 'deck']);
    this._deckService.setChosenDeck(this.decksref[index]);
  }

  GoToEditDeck(index:number) {
    this.router.navigate(['/', 'EditDeck'])
    const docID = this.decksref[index].Id
  }
}
// improvement: Right now the links to the thumbnails have just been copied from firestore storage, should make it so it automatic when you make a deck and upload a thumbnail for the deck.