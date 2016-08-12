import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template: `
    <div class="">
      <meal-display *ngFor="#currentMeal of mealList"
        [meal]="currentMeal" (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal">
      </meal-display>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
