import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { RoomserviceService } from './services/roomservice.service';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FilterPipePipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ RoomserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
