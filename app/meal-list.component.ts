import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MealObject} from './mealobj.model';

@Component({
	selector: 'meal-list',
	template: `
	<div class="col-md-5">
		<select class='form-group' (change)="onChange($event.target.value)">
	      <option value="0" selected>All Food</option>
	      <option value="1">High Calories</option>
	      <option value="2">Low Calories</option>
	    </select>
	    <div *ngFor="let meal of childMealList|foodfilter:selectedOption; let i=index">
	      <p>Meal Name: {{ meal.name}}</p>
	      <p>No.of.Calories: {{ meal.calories}}</p>
	      <p>Meal Details: {{ meal.details}}</p>
	      <button class='btn-primary' (click)="makeMealEditable(meal)">Edit</button>
	      <button class='btn-primary' (click)="removeMeal(i)">Remove</button>
	      <edit-meal
	      *ngIf="meal.edit"
	      [childSelectedMeal]=meal
	      (done)="finishedEditing()"
	      ></edit-meal>
	    </div>
	</div>
  `
})

export class MealListComponent{
	public selectedOption: number=0;
	@Input() childMealList: MealObject[];
	@Output() editBoolean: EventEmitter<any>=new EventEmitter();
	makeMealEditable(meal:MealObject){
		meal.edit=true;
		//console.log(meal.name);
		this.editBoolean.emit(meal);
	}
	removeMeal(indextodelete){
		this.childMealList.splice(indextodelete, 1);
	}
	onChange(option){
		this.selectedOption=option;
	}
}


 
