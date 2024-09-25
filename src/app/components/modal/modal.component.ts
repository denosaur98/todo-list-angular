import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
})

export class ModalComponent implements OnInit {
  isModalOpen: boolean = false

  @Input() taskTitle: string = ''
  @Input() taskDescription: string = ''

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    this.modalService.isModalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen
    })
  }

  closeModal() {
    this.modalService.closeModal()
  }
}