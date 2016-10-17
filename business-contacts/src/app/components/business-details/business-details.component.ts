import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IBusiness } from "../../shared/models";

@Component({
  selector: 'bc-business-details',
  template: require('./business-details.component.html')
})
export class BusinessDetailsComponent {
  @Input() business: IBusiness;
  @Output() canceled = new EventEmitter();

  goBack() {
    this.canceled.emit();
  }
}
