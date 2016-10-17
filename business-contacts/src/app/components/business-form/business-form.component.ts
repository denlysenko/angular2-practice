import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { ICategory, IBusiness } from "../../shared/models";
import { FirebaseService } from "../../services/firebase.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'bc-business-form',
  template: require('./business-form.component.html')
})
export class BusinessFormComponent implements OnInit, OnChanges {
  categories: ICategory[];
  @Input() business: IBusiness;
  @Output() saved = new EventEmitter();
  private businessForm: FormGroup;

  constructor(
    private _firebaseService: FirebaseService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this._firebaseService.getCategories()
      .subscribe(
        categories => {
          this.categories = categories;
        },
        err => {
          console.log(err);
        }
      );

    this.createForm();
  }

  ngOnChanges() {
    this.createForm();
  }

  private createForm() {
    this.businessForm = this._fb.group({
      key: this.business && this.business.$key || null,
      company: [ this.business && this.business.company || '', Validators.required ],
      category: [ this.business && this.business.category || '', Validators.required ],
      years_in_business: this.business && this.business.years_in_business || '',
      description: this.business && this.business.description || '',
      email: [ this.business && this.business.email || '', Validators.compose([Validators.required, isEmail]) ],
      phone: this.business && this.business.phone || '',
      street_address: this.business && this.business.street_address || '',
      city: [ this.business && this.business.city || '', Validators.required ],
      state: this.business && this.business.state || '',
      zipcode: this.business && this.business.zipcode || ''
    });
  }

  saveBusiness() {
    if (this.businessForm.valid) {
      this.businessForm.value.key ? this._firebaseService.updateBusiness(this.businessForm.value.key, this.businessForm.value) : this._firebaseService.addBusiness(this.businessForm.value);

      this.saved.emit();
    }
  }
}

function isEmail(c: FormControl) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(c.value) ? null : {
    validateEmail: true
  };
}
