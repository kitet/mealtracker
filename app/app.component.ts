import { Component  } from '@angular/core';
import { MealObject } from './mealobj.model';


@Component({
	selector:'my-div',
	template:`
	<div class="container-fluid">
	<div class='row'>
		<div class='col-md-4'>
			<new-meal (newMealClick)="addTask($event)"></new-meal>
		</div>
	</div>
	<meal-list [childMealList]="meals"></meal-list>
	</div>
	`
})

export class AppComponent{
	public meals: MealObject[]=[];

	addTask(meal: MealObject) {
    	this.meals.push(meal);
  	}
  	selectedMeal: MealObject = null;

  	finishedEditingMeal(){
  		this.selectedMeal=null;
  	}
}
