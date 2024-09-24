import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  navLinks = [
    { title: 'Главная', link: '/' },
    { title: 'О нас', link: '/about' },
  ]
}