import {Component, Input} from '@angular/core';
import {MealObject} from './mealobj.model';

@Component({
	selector: 'meal-list',
	template: `
    <div *ngFor="let meal of childMealList">
      <p>{{ meal.name}}</p>
    </div>
  `
})

export class MealListComponent{
	@Input() childMealList: MealObject[];
}

