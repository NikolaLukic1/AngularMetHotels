import { Component, OnInit, HostBinding, Input, Output, EventEmitter} from '@angular/core';
import { Accomodation } from './accomodation.model'
import { RoomserviceService } from '../services/roomservice.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() accomodation: Accomodation;
  @Output() deleteAcc: EventEmitter<Accomodation>;
  @Output() changeAcc: EventEmitter<Accomodation>;
  public finPrice: any;

      constructor(private roomService: RoomserviceService) {
        this.deleteAcc = new EventEmitter();
        this.changeAcc = new EventEmitter();
      }
  
  ngOnInit() {
    this.finPrice = this.accomodation.price;
  }

  public setPrice(numOfNigths :any, price:any) {
     this.finPrice =  this.roomService.getPrice(numOfNigths, price); 
  }

  public deleteAccomodation() : void{
    this.deleteAcc.emit(this.accomodation);
  }
  public changeAccomodation() : void{
    this.changeAcc.emit(this.accomodation);
  }

}
