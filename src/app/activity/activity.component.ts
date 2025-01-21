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
export class ActivityComponent implements OnInit{
  tipoActividad: string = '';
  currentIndex: number = 0;
  actividades: any[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tipoActividad = params['tipo'];
      this.cargarActividades(this.tipoActividad);
    });
  }
  previousEvent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Si estamos en el primer evento, volvemos al último
      this.currentIndex = this.actividades.length - 1;
    }
  }

  nextEvent() {
    if (this.currentIndex < this.actividades.length - 1) {
      this.currentIndex++;
    } else {
      // Si estamos en el último evento, volvemos al primero
      this.currentIndex = 0;
    }
  }
  cargarActividades(tipo: string) {
    // Aquí filtras las actividades según el tipo
    switch(tipo) {
      case 'familia':
        this.actividades = [ {
          title: 'Evento 1',
          date: '2024-03-20',
          time: '15:00',
          description: 'Descripción del evento 1',
          image: 'ruta/imagen1.jpg',
          location: 'Ubicación 1',
          guests: ['Invitado 1', 'Invitado 2']
        },];
        break;
      case 'amigos':
        this.actividades = [{
          title: 'Evento 2',
          date: '2024-03-21',
          time: '16:00',
          description: 'Descripción del evento 2',
          image: 'ruta/imagen2.jpg',
          location: 'Ubicación 2',
          guests: ['Invitado 3', 'Invitado 4']
        }];
        break;
      case 'pareja':
        this.actividades = [/* tus actividades recreativas */];
        break;
    }
  }

  
}
