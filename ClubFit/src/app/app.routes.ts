import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home/home.component';

export const routes: Routes = [
    {
        path:'', children:[{path:'pages/home', component: HomeComponent}]

    },
];
