import { Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';

export const routes: Routes = [
    { path: 'actividad/:category', component: ActivityComponent },
];
