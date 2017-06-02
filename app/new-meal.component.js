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
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealClick = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.addMealButtonClick = function (name, cal, details) {
        var newMeal = new mealobj_model_1.MealObject(name, cal, details);
        this.newMealClick.emit(newMeal);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NewMealComponent.prototype, "newMealClick", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: '<h1>New Meal</h1>' +
                '<div>' +
                '<label>Name:</label>' +
                '<input #newmealname>' +
                '<label>Calories:</label>' +
                '<input #newmealcalvalue>' +
                '<label>Details:</label>' +
                '<input #newmealdetails>' +
                '<button (click)="addMealButtonClick(newmealname.value, newmealcalvalue.value, newmealdetails.value);' +
                'newmealname.value=\'\';' +
                'newmealcalvalue.value=\'\';' +
                'newmealdetails.value=\'\' ">' +
                'Add Meal</button>' +
                '</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map