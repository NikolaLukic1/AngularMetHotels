import { Component, OnInit,Output, Input, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  title: string;
  description: string;
  price: number;

  @Output() accToAdd : EventEmitter<any>;
  @Input() accomodation : any;
  

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'title':  ['', Validators.required],
      'description': ['', Validators.required],
      'price': ['', Validators.required]
    });
    this.accToAdd = new EventEmitter();
  }

  onSubmit(value: any): void {
    if(value.description.length < 6) console.log('Vrednost je manja od 6 karaktera: ', value);
    this.accToAdd.emit(this.myForm.value);
  }
  ngOnInit() {
  }
}