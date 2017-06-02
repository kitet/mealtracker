import { Component  } from '@angular/core';
import { MealObject } from './mealobj.model';


@Component({
	selector:'my-div',
	template:
	'<div class="container">'+
	'<new-meal (newMealClick)="addTask($event)"></new-meal>'+
	'<meal-list [childMealList]="meals"></meal-list>'+
	'</div>'
})

export class MainComponent{
	public meals: MealObject[];
	//this.names.push("mkjj");
	addTask(meal: MealObject) {
		// console.log(meal.name,meal.calories, meal.details);
    	this.meals.push(meal);
  	}
}
