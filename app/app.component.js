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
var AppComponent = (function () {
    function AppComponent() {
        this.meals = [];
        this.selectedMeal = null;
    }
    AppComponent.prototype.addTask = function (meal) {
        this.meals.push(meal);
    };
    AppComponent.prototype.finishedEditingMeal = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-div',
            template: "\n\t<div class=\"container-fluid\">\n\t<div class='row'>\n\t\t<div class='col-md-4'>\n\t\t\t<new-meal (newMealClick)=\"addTask($event)\"></new-meal>\n\t\t</div>\n\t</div>\n\t<meal-list [childMealList]=\"meals\"></meal-list>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map