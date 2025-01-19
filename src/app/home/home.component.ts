import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  
  onOptionClick(route: string): void {
    console.log(`Navigating to: ${route}`);
    // Aquí puedes implementar la navegación usando Router
  }
}
