import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal/modal.service';

interface Task {
  id: number
  title: string
  description: string,
  link: any
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, FormsModule, NgFor, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  newTaskName = ''
  newTaskDescription = ''
  taskWarning = false
  selectedTask: Task | null = null
  
  constructor(public modalService: ModalService) {}

  tasks: Task[] = []

  addTask() {
    if(this.newTaskName && this.newTaskDescription) {
      this.tasks.push({ id: this.tasks.length + 1, title: this.newTaskName, description: this.newTaskDescription, link: `task-${this.tasks.length + 1}` })
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

  openModal(task: Task) {
    this.selectedTask = task
    this.modalService.openModal()
  }

  updateTask(changes: { title: string, description: string }) {
    if(this.selectedTask) {
      this.selectedTask.title = changes.title
      this.selectedTask.description = changes.description
    }
  }
}