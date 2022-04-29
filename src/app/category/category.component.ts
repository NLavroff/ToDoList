import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  color: Array<any> = [
    '#e7845e',
    '#fc0184',
    '#f6b93f',
    '#9224a7',
    '#20c898',
    '#f03734',
    '#aad450',
    '#026467',
    '#fefefe',
    '#928779',
    '#d4d2a5',
    '#fcdebe',
    '#90a583',
    '#b26e63',
    '#c6caed'
  ];

  categories!: Array<any>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {

    this.categoryService.loadCategories().subscribe(val => {
      this.categories = val;
      console.log('categoooooo', this.categories);
      console.log(val);
    })
  }

  onSubmit(f: NgForm) {

    let randomNumber = Math.floor(Math.random() * this.color.length);

    let todoCategory = {
      category: f.value.categoryName,
      colorCode: this.color[randomNumber],
      todoCount: 0,
    };

    this.categoryService.saveCategory(todoCategory);

   }
}
