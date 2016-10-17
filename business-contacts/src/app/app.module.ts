import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BusinessesComponent } from "./components/businesses/businesses.component";
import { BusinessDetailsComponent } from "./components/business-details/business-details.component";
import { BusinessFormComponent } from "./components/business-form/business-form.component";

export const firebaseConfig = {
  apiKey: 'AIzaSyAhubxwOZdIxzBJueBo8zLlE5CW2XyqnwA',
  authDomain: 'businesscontacts-c6309.firebaseapp.com',
  databaseURL: 'https://businesscontacts-c6309.firebaseio.com',
  storageBucket: 'businesscontacts-c6309.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusinessesComponent,
    BusinessDetailsComponent,
    BusinessFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
