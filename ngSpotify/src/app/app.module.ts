import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { ArtistModule } from './components/artist/artist.module';
import { AlbumModule } from './components/album/album.module';

import { routing } from '../routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    AboutModule,
    ArtistModule,
    AlbumModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
