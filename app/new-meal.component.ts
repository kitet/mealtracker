import { Component,Output,EventEmitter   } from '@angular/core';
import { MealObject } from './mealobj.model';

@Component({
	selector: 'new-meal',
	template: '<h1>New Meal</h1>'+
	'<div>'+
		'<label>Name:</label>'+
		'<input #newmealname>'+
		'<label>Calories:</label>'+
		'<input #newmealcalvalue>'+
		'<label>Details:</label>'+
		'<input #newmealdetails>'+
		'<button (click)="addMealButtonClick(newmealname.value, newmealcalvalue.value, newmealdetails.value);'+
		'newmealname.value=\'\';'+
		'newmealcalvalue.value=\'\';'+
		'newmealdetails.value=\'\' ">'+
		'Add Meal</button>'+
	'</div>'
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