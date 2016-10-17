import { RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';

export const routing = RouterModule.forChild([
  { path: 'album/:id', component: AlbumComponent }
]);
