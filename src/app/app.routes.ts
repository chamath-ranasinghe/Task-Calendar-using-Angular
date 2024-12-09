import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
];
