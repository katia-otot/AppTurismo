import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Event {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  image: string;
  guests?: string[];
}

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
  currentCategory: string = '';
  currentIndex: number = 0;
  events: Event[] = [
    {
      date: 'Martes 21',
      time: '19.00 HS',
      title: 'UNDERTANGO',
      description: 'Miqueas NoseK (BATERÍA) - Juan Esposito (BAJO) - Lucas Cambareri (BANDONEÓN) - Titi Trucco (TECLADOS)',
      location: 'EL CAÑO - Parador de playa',
      image: 'assets/images/evento1.jpg',
      guests: ['MIQUIMAUS', 'MELISA CÁCERES']
    },
  
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCategory = params['category'];
    });
  }

  nextEvent() {
    this.currentIndex = (this.currentIndex + 1) % this.events.length;
  }

  previousEvent() {
    this.currentIndex = this.currentIndex === 0 
      ? this.events.length - 1 
      : this.currentIndex - 1;
  }
}
