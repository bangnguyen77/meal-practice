import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="">
      <h3>{{ meal.name }}</h3>
      <p>{{ meal.description }}</p>
      <p>{{ meal.calories }}</p>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
