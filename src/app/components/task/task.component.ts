import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number
  title: string
  description: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  newTaskName = ''
  newTaskDescription = ''
  taskWarning = false

  tasks: Task[] = []

  addTask() {
    if(this.newTaskName && this.newTaskDescription) {
      this.tasks.push({ id: this.tasks.length + 1, title: this.newTaskName, description: this.newTaskDescription })
      this.newTaskName = ''
      this.newTaskDescription = ''
      this.taskWarning = false
    } else {
      this.taskWarning = true
    }
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}