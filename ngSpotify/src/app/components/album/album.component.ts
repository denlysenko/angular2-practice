import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

import './album.component.scss';

@Component({
  template: require('./album.component.html')
})
export class AlbumComponent implements OnInit {
  id: string;
  album: any;

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => this.album = album);
      });
  }
}
