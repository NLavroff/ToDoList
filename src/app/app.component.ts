import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todolist';
  toDoList = [
    {
      title: 'fait',
      description: 'description',
      done: false,
    },
    {
      title: 'à faire',
      description: 'description',
      done: false,
    },
  ];

  public myForm = new FormGroup({
    title: new FormControl('coucou'),
    description: new FormControl('hello'),
  });

  onSubmit() {
    //récupérer la tache
    //comparer la tache avec la toDoList s'il existe déjà
    //si non le push
    const task = this.myForm.value;
    console.log(task);
    console.table(this.toDoList);
    // let isDuplicate = false;
    // this.toDoList.forEach(toDoListTask => {
    //   if(toDoListTask.title === task.title && toDoListTask.description === task.description) {
    //     isDuplicate = true;
    //   }
    // })
    // if (!isDuplicate) {
    //   this.toDoList.push(this.myForm.value);
    // }
    const find = this.toDoList.find(
      (toDoListTask) =>
        toDoListTask.title === task.title &&
        toDoListTask.description === task.description
    );
    console.log(find);
    if (!find) {
      this.toDoList.push(this.myForm.value);
    }
  }
}
