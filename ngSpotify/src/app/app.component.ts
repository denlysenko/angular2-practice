import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'ng-spotify-app',
  template: require('./app.component.html'),
  directives: [ NavbarComponent ],
  providers: [ SpotifyService ]
})

export class AppComponent {}
