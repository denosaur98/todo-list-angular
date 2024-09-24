import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerElements = [
    { title: 'Это футер' },
    { title: 'Самый классный' },
    { title: 'Футер' }
  ]
}