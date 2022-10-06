import { Injectable } from '@angular/core';
import { FirebaseTSFirestore, Where } from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { Genre } from "../interfaces/Genre";

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private firestore: FirebaseTSFirestore) {}


async GetGenres(){

  const decksref: Array<Genre> = [];

   this.firestore.getCollection({
    path: ['Genre'],
    where:[],
    onComplete: (result) => {
      decksref?.push(<Genre>result.docs[0].data())
    }
  })


  return decksref;
}


}