import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }   from './app.component';
import { NewMealComponent }   from './new-meal.component';
import { FormsModule }   from '@angular/forms';
import { MealListComponent } from './meal-list.component';


@NgModule({
  imports: [
  		BrowserModule,
  		FormsModule
  ],
  declarations: [ 
  		MainComponent,
		NewMealComponent,
		MealListComponent
  ],
  bootstrap:    [ MainComponent ]
})

export class AppModule { }