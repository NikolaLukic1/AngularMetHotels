import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {

  constructor() { }

  public getPrice(numberOfNights : number, price: number) : number{
    return numberOfNights * price;
  }
}
