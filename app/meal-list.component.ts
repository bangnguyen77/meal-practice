import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
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
      <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public caloriesFilter: string = "all";
  public onMealSelect: EventEmitter<Meal>;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  onCaloriesChange(filterOption) {
    this.caloriesFilter = filterOption;
  }

  createMeal(newMeal: string[]): void {
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseInt(newMeal[2], this.mealList.length))
    );
  }
}
