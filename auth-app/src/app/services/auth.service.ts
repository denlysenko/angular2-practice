import { Injectable } from "@angular/core";
import { tokenNotExpired } from "angular2-jwt";

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock(
    'yCXynFA0gtUFqsFDyNwZAopAZgmRH3E3',
    'denlysenko.auth0.com',
    {}
  );

  constructor() {
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.idToken, (err, profile) => {
        if (err) {
          throw new Error(err);
        }
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });

    });
  }

  me() {
    if (localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    }
  }

  isAuthenticated() {
    return tokenNotExpired();
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
