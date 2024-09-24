import { Component, OnInit } from '@angular/core';
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

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.isModalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen
    })
  }

  closeModal() {
    this.modalService.closeModal()
  }
}