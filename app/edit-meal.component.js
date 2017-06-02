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
var mealobj_model_1 = require('./mealobj.model');
var EditMealComponent = (function () {
    function EditMealComponent() {
        this.doneEditingMeal = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.doneClicked = function () {
        this.childSelectedMeal.edit = false;
        this.doneEditingMeal.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', mealobj_model_1.MealObject)
    ], EditMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "doneEditingMeal", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n    <div *ngIf=\"childSelectedMeal\">\n      <h1>Edit Meal</h1>\n      <div>\n        <label>Enter New Meal Name:</label>\n        <input [(ngModel)]=\"childSelectedMeal.name\">\n      </div>\n      <div>\n        <label>Enter New Meal Calories Value:</label>\n        <input [(ngModel)]=\"childSelectedMeal.calories\">\n      </div>\n      <div>\n        <label>Enter New Meal Details:</label>\n        <input [(ngModel)]=\"childSelectedMeal.details\">\n      </div>\n      <button (click)=\"doneClicked()\">Done</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map