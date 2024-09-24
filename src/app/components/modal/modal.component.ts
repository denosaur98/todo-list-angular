import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})

export class ModalComponent {
  
  isModalOpen = true
  closeModal() {
    this.isModalOpen = false
  }
}