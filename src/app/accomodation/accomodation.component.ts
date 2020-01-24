import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Accomodation } from './accomodation.model'

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() accomodation: Accomodation;
      constructor() {
      }


  ngOnInit() {
  }

}
