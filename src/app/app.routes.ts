import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'actividad/:tipo', component: ActivityComponent },
    { path: '**', redirectTo: '' }

];
