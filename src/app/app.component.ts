import { Component } from '@angular/core';
import { Accomodation } from './accomodation/accomodation.model';

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

  addAccomodation(title: HTMLInputElement, price: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log(`Adding accomodation title: ${title.value} and price: ${price.value}`);
    this.accomodations.push(new Accomodation(title.value, parseInt(price.value), description.value));
    title.value = '';
    price.value = '';
    description.value = '';
    return false;
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
}
