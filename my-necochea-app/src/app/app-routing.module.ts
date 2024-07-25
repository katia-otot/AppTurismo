import { provideRouter, Routes } from '@angular/router';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { PlaceRecommendationComponent } from './place-recommendation/place-recommendation.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

const routes: Routes = [
  { path: '', component: SelectProfileComponent },
  { path: 'recommendation', component: PlaceRecommendationComponent },
  { path: 'details', component: PlaceDetailsComponent }
];

export const appRoutingProviders = [
    provideRouter(routes)
  ];


