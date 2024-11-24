import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelopmentComponent } from './development/development.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: AboutComponent},
    {path: '**', component: DevelopmentComponent}
];
