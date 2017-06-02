import {Pipe, PipeTransform} from '@angular/core';
import {MealObject} from './mealobj.model';

@Pipe({
	name:"foodfilter",
	pure: false
})
export class MealFilterPipe implements PipeTransform {
  transform(input: MealObject[], selectionOption){
    var output: MealObject[] = [];
    if(selectionOption==0){
		return input;
    }  
    if(selectionOption==1){
		for (var i = 0; i < input.length; i++) {
		    if (input[i].calories>=500) {
		        output.push(input[i]);
		    }
		}
    }  
    if(selectionOption==2){
		for (var i = 0; i < input.length; i++) {
		    if (input[i].calories<500) {
		        output.push(input[i]);
		    }
		}
    }
    return output;
  }
}