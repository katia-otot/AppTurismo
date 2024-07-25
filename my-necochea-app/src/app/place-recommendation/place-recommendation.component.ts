import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-place-recommendation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-recommendation.component.html',
  styleUrl: './place-recommendation.component.css'
})
export class PlaceRecommendationComponent {

}
