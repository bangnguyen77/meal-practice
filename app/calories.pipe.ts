import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesFilter = args[0];
    if (caloriesFilter === "high") {
      return input.filter((meal) => {
        return meal.calories >= 500;
      });
    } else if (caloriesFilter === "low") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else {
      return input;
    }
  }
}
