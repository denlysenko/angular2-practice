import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'profile',
  template: require('./profile.component.html')
})
export class ProfileComponent implements OnInit {
  profile: Object;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.profile = this._auth.me();
  }
}
