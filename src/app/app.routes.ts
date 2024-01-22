import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import CoachingOnlineComponent from './pages/coaching-online/coaching-online.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FreeComponent } from './pages/free/free.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TrainingComponent } from './pages/training/training.component';
import { TrainingNutritionComponent } from './pages/training-nutrition/training-nutrition.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=> import("./pages/home/home.component"),
    },
    {
        path: 'coaching-online',
        title: 'Coaching online',
        component:CoachingOnlineComponent
    },
    {
        path: 'gratarola',
        title: 'Gratarola',
        component:FreeComponent
    },
    {
        path: 'blogs',
        title: 'Blogs',
        component:BlogComponent
    },
    {
        path: 'quien-soy',
        title: 'Quien soy?',
        component:AboutMeComponent
    },
    {
        path: 'entrenamiento',
        title: 'Entrenamiento',
        component:TrainingComponent
    },
    {
        path: 'entrenamiento-nutricion',
        title: 'Entrenamiento - Nutrición',
        component:TrainingNutritionComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
