import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import { Accomodation } from './../accomodation/accomodation.model'

@Component({
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.css']
})
export class AddAccomodationComponent implements OnInit {

  @Output() accToAdd : EventEmitter<Accomodation>;
  @Input() accomodation : any;

  constructor() { 
    this.accToAdd = new EventEmitter();
  }

  ngOnInit() {
  }

  public addAccomodation() : void {
    this.accToAdd.emit(this.accomodation);
  }
}
