import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="new-meal">
      <h3>Add Meal</h3>
      <input placeholder="name" class="input-lg" #newName>
      <input placeholder="description" class="input-lg" #newDescription>
      <input placeholder="calories" class="input-lg" #newCalories>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn btn-success btn-lg log-button">Log</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;

  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(mealName: HTMLInputElement, mealDescription: HTMLInputElement, mealCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([mealName.value, mealDescription.value, mealCalories.value]);
    mealName.value = "";
    mealDescription.value = "";
    mealCalories.value = "";
  }
}
