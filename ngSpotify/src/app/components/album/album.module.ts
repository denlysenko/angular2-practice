import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './album.routing';
import { AlbumComponent } from './album.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AlbumComponent
  ]
})
export class AlbumModule {}
