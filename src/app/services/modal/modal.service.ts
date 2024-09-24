import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  public isModalOpen$ = new Subject<boolean>()

  constructor() {}

  openModal() {
    this.isModalOpen$.next(true)
  }

  closeModal() {
    this.isModalOpen$.next(false)
  }

  getModalState() {
    return this.isModalOpen$
  }
}