import { Component,Output,EventEmitter   } from '@angular/core';
import { MealObject } from './mealobj.model';

@Component({
	selector: 'new-meal',
	template: `
	<div>
		<h1 class='h1' text='success'>New Meal</h1>
		<div class='form-group'>
			<label>Name:</label>
			<input class='form-control' #newmealname>
			<label>Calories:</label>
			<input class='form-control' #newmealcalvalue>
			<label>Details:</label>
			<input class='form-control' #newmealdetails>
			<button class='btn-success' (click)="addMealButtonClick(newmealname.value, newmealcalvalue.value, newmealdetails.value);
			newmealname.value='';
			newmealcalvalue.value='';
			newmealdetails.value=''">
			Add Meal</button>
			</div>
	</div>
	`
})

//will have inputs to collect data
//will have button to submit input data


export class NewMealComponent{
	@Output() newMealClick: EventEmitter<any>=new EventEmitter();
	addMealButtonClick(name: string, cal:number, details: string){
		var newMeal: MealObject=new MealObject(name, cal,details);
		this.newMealClick.emit(newMeal);
	}
}