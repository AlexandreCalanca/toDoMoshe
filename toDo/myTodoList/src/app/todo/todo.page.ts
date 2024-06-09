import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage {
  newTask: string = '';
  tasks: string[] = [];

  constructor() { }

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}