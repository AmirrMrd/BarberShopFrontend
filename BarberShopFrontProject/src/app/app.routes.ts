import { Routes } from '@angular/router';
import { ServicesComponent } from './Components/services/services.component';
import { HomeComponent } from './Components/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'service',
        component: ServicesComponent
    }
];
