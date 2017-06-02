import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewMealComponent }   from './new-meal.component';
import { FormsModule }   from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { MealFilterPipe } from './foodfilter.pipe';


@NgModule({
  imports: [
  		BrowserModule,
  		FormsModule
  ],
  declarations: [ 
  		AppComponent,
		NewMealComponent,
		MealListComponent,
		EditMealComponent,
		MealFilterPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }