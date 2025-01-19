import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  options = [
    { text: 'En familia', route: '/familia' },
    { text: 'Con amigos', route: '/amigos' },
    { text: 'En pareja', route: '/pareja' }
  ];

  constructor(private router: Router) {} 
  
  onOptionClick(route: string): void {
    this.router.navigate(['/actividad', route]);
  }
}
