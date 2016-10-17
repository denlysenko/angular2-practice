import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  template: require('./home.component.html')
})

export class HomeComponent {
  search: string;
  results: any[];

  constructor(private _spotifyService: SpotifyService) {}

  searchMusic() {
    this._spotifyService.searchMusic(this.search)
      .subscribe(res => this.results = res.artists.items);
  }
}
