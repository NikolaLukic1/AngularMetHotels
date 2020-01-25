import { Component} from '@angular/core';
import { Accomodation } from './accomodation/accomodation.model';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accomodations: Accomodation[];
  constructor() {
  this.accomodations = [
  new Accomodation('Single', 45, 'A room assigned to one person. May have one or more beds. The room size or area of Single Rooms are generally between 37 m² to 45 m².'),
  new Accomodation('Double',  22, 'A room assigned to two people. May have one or more beds. The room size or area of Double Rooms are generally between 40 m² to 45 m².' ),  
];
  }


  addAccomodationOne(accomodation){
    this.accomodations.push(new Accomodation(accomodation.title,  accomodation.price, accomodation.description));
  }
  
  deleteRow(accomodation : Accomodation){
    this.accomodations = this.accomodations.filter( it => {
      return it.title != accomodation.title});
  }

  changeRow(accomodation : Accomodation){
    let index = this.accomodations.findIndex(i => i.title === accomodation.title);
    this.accomodations[index].title = this._generateString(6);
  }

  private _generateString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  // funkcija za randomizaciju elemenata u nizu
  shuffleAccomodations(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  }

  onSubmit(){}
}
