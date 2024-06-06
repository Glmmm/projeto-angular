import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewComponent } from './components/pages/new/new.component';
import { MomentComponent } from './components/pages/moment/moment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewComponent },
  { path: 'moments/:id', component: MomentComponent },
];
