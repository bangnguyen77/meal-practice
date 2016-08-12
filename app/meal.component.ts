import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="">
      <h3>{{ meal.name }}</h3>
      <p>Description: {{ meal.description }}</p>
      <p>Calories: {{ meal.calories }}</p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
