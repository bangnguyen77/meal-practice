import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  pipes: [CaloriesPipe],
  template: `
    <div class="">
      <select (change)="onCaloriesChange($event.target.value)">
        <option value="all">View All Meals</option>
        <option value="high">View High Calories Meals</option>
        <option value="low">View Low Calories Meals</option>
      </select>
      <meal-display *ngFor="#currentMeal of mealList | calories:caloriesFilter"
        [meal]="currentMeal" (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal">
      </meal-display>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public caloriesFilter: string = "all";

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }

  onCaloriesChange(filterOption) {
    this.caloriesFilter = filterOption;
  }
}
