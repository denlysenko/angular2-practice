import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './artist.routing';
import { ArtistComponent } from './artist.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ArtistComponent
  ]
})
export class ArtistModule {}
