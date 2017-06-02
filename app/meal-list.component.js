"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MealListComponent = (function () {
    function MealListComponent() {
        this.selectedOption = 0;
        this.editBoolean = new core_1.EventEmitter();
    }
    MealListComponent.prototype.makeMealEditable = function (meal) {
        meal.edit = true;
        //console.log(meal.name);
        this.editBoolean.emit(meal);
    };
    MealListComponent.prototype.removeMeal = function (indextodelete) {
        this.childMealList.splice(indextodelete, 1);
    };
    MealListComponent.prototype.onChange = function (option) {
        this.selectedOption = option;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MealListComponent.prototype, "editBoolean", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n\t<div class=\"col-md-5\">\n\t\t<select class='form-group' (change)=\"onChange($event.target.value)\">\n\t      <option value=\"0\" selected>All Food</option>\n\t      <option value=\"1\">High Calories</option>\n\t      <option value=\"2\">Low Calories</option>\n\t    </select>\n\t    <div *ngFor=\"let meal of childMealList|foodfilter:selectedOption; let i=index\">\n\t      <p>Meal Name: {{ meal.name}}</p>\n\t      <p>No.of.Calories: {{ meal.calories}}</p>\n\t      <p>Meal Details: {{ meal.details}}</p>\n\t      <button class='btn-primary' (click)=\"makeMealEditable(meal)\">Edit</button>\n\t      <button class='btn-primary' (click)=\"removeMeal(i)\">Remove</button>\n\t      <edit-meal\n\t      *ngIf=\"meal.edit\"\n\t      [childSelectedMeal]=meal\n\t      (done)=\"finishedEditing()\"\n\t      ></edit-meal>\n\t    </div>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map