import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import CoachingOnlineComponent from './pages/coaching-online/coaching-online.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { TiendComponent } from './pages/tiend/tiend.component';
import { FreeComponent } from './pages/free/free.component';
import { BlogComponent } from './pages/blog/blog.component';




export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=> import("./pages/home/home.component"),
    },
    {
        path: 'pages/coaching-online',
        title: 'Coaching online',
        component:CoachingOnlineComponent
    },
    {
        path: 'pages/tiend-up',
        title: 'TiendUp',
        component:TiendComponent
    },
    {
        path: 'pages/gratarola',
        title: 'Gratarola',
        component:FreeComponent
    },
    {
        path: 'pages/blogs',
        title: 'Blogs',
        component:BlogComponent
    },
    {
        path: 'pages/quien-soy',
        title: 'Quien soy?',
        component:AboutMeComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
