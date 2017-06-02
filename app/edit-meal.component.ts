import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MealObject } from './mealobj.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter New Meal Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Enter New Meal Calories Value:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div>
        <label>Enter New Meal Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: MealObject;
  @Output() doneEditingMeal = new EventEmitter();
  doneClicked() {
  	this.childSelectedMeal.edit=false;
    this.doneEditingMeal.emit();
  }
}

