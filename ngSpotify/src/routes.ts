/// <reference path="../typings/index.d.ts"/>

import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './app/components/artist/artist.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  // this can be implemented after RC6 is ready
  // {
  //   path: 'about',
  //   loadChildren: 'app/components/about/about.module'
  // }
];

export const routing = RouterModule.forRoot(routes);
