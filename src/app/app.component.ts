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
  new Accomodation('Hotel Grand', 45),
  new Accomodation('Hotel Rtanj',  22),  
];
  }

  addAccomodation(title: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding accomodation title: ${title.value} and price: ${price.value}`);
    this.accomodations.push(new Accomodation(title.value, parseInt(price.value)));
    title.value = '';
    price.value = '';
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
