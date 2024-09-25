import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  imports: [NgIf, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})

export class ModalComponent implements OnInit {
  isModalOpen: boolean = false

  @Input() taskTitle: string = ''
  @Input() taskDescription: string = ''

  @Output() taskChanges = new EventEmitter<{ title: string, description: string }>()

  changeTaskTitle: string = ''
  changeTaskDescription: string = ''

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.isModalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen
    })
  }

  closeModal() {
    this.modalService.closeModal()
  }

  saveTaskChanges() {
    this.taskChanges.emit({ title: this.changeTaskTitle, description: this.changeTaskDescription })
    this.modalService.closeModal()
  }
}