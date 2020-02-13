import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Tomato paste pizza', 'https://media4.picsearch.com/is?SW90rBIc7wWFGA_UQIgbEHn1HgCcQVBsMvbJm93-gt8&height=341'),
    new Recipe('Pizza', 'Tomato paste pizza', 'https://media4.picsearch.com/is?SW90rBIc7wWFGA_UQIgbEHn1HgCcQVBsMvbJm93-gt8&height=341'),
    new Recipe('Pizza', 'Tomato paste pizza', 'https://media4.picsearch.com/is?SW90rBIc7wWFGA_UQIgbEHn1HgCcQVBsMvbJm93-gt8&height=341')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
