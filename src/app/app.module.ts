import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { AddAccomodationComponent } from './add-accomodation/add-accomodation.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FilterPipePipe,
    AddAccomodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
