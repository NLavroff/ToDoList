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
    '#ffd166',
    '#9224a7',
    '#20c898',
    '#f03734',
    '#aad450',
    '#026467',
    '#264653',
    '#2a9d8f',
    '#d4d2a5',
    '#e9c46a',
    '#90a583',
    '#f4a261',
    '#e76f51'
  ];

  categories!: Array<any>;
  categoryName: string = '';
  dataStatus: string = 'Ajouter';
  catId!: string;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {

    this.categoryService.loadCategories().subscribe(val => {
      this.categories = val;
    })
  }

  onSubmit(f: NgForm) {

    if(this.dataStatus === "Ajouter") {

      let randomNumber = Math.floor(Math.random() * this.color.length);
      let todoCategory = {
      category: f.value.categoryName,
      colorCode: this.color[randomNumber],
      todoCount: 0,
    };
      this.categoryService.saveCategory(todoCategory);
      f.resetForm();

    } else if(this.dataStatus === "Editer") {

      this.categoryService.updateCategory(this.catId, f.value.categoryName);
      f.resetForm();
    }

   }

   onEdit(category: string, id: string) {
     this.categoryName = category;
     this.dataStatus = 'Editer';
     this.catId = id;
   }
}
