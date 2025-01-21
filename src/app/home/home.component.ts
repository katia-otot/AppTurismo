import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options = [
    { text: 'En familia', tipo: 'familia' },
    { text: 'Con amigos', tipo: 'amigos' },
    { text: 'En pareja', tipo: 'pareja' }
  ];

  constructor(private router: Router) {} 
  
  onOptionClick(tipo: string): void {
    this.router.navigate(['/actividad', tipo]);
  }
}
