import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  catId: any;
  todos!: Array<any>;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.catId = this.activatedRoute.snapshot.paramMap.get('id');

    this.todoService.loadTodos(this.catId).subscribe(val => {
      this.todos = val;
      console.log(val);
    })
  }

  onSubmit(f:NgForm) {

    let todo = {
      todo: f.value.todoText,
      isCompleted: false
    }

    this.todoService.saveTodo(this.catId, todo);
    f.resetForm();
  }

}
