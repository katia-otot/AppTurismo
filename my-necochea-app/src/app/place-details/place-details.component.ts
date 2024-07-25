import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent {

}
