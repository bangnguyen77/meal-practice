import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Trackers</h1>
      <meal-list [mealList]="meals">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];

  constructor() {
    this.meals = [
      new Meal('breakfast', 'Subway', '300', 0),
      new Meal('lunch', 'McDonald', '400', 1),
      new Meal('dinner', 'KFC', '600', 2),
      new Meal('supper', 'BurgerKing', '700', 3),
    ]
  }
}
