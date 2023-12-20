import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home/home.component';
import CoachingOnlineComponent from './pages/coaching-online/coaching-online.component';
//import { CoachingOnlineComponent } from './pages/coaching-online/coaching-online.component';



export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=> import("./pages/home/home/home.component"),
     
    },
    {
        path: 'home/pages/coaching-online',
        title: 'Coaching online',
        component:CoachingOnlineComponent
    },
    /*
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }*/
];
