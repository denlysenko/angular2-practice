import {Component} from "@angular/core";

@Component({
  selector: 'bc-navbar',
  template: require('./navbar.component.html')
})
export class NavbarComponent {
  title = 'Business Contacts';
}
