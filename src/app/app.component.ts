import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';

  list = [
    {
      title: 'Angular',
      description: 'Ajouter les input',
      done: false,
    },
    {
      title: 'JS',
      description: 'Réviser la POO',
      done: false,
    },
  ];

  public myForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    const task = this.myForm.value;
    console.log(task);
    console.table(this.list);
    const find = this.list.find(
      (toDoListTask) =>
        toDoListTask.title === task.title &&
        toDoListTask.description === task.description
    );
    console.log(find);
    if (!find) {
      this.list.push(task);
    }
  }
}
