import { Component, OnInit } from "@angular/core";
import { IBusiness, ICategory } from "../../shared/models";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'bc-businesses',
  template: require('./businesses.component.html')
})
export class BusinessesComponent implements OnInit {
  businesses: IBusiness[];
  categories: ICategory[];
  currentBusiness: IBusiness;
  editedBusiness: IBusiness;
  isFormEnabled: boolean;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    this._firebaseService.getBusinesses()
        .subscribe(
            businesses => {
              this.businesses = businesses;
            },
            err => {
              console.log(err);
            }
        );

    this._firebaseService.getCategories()
        .subscribe(
            categories => {
              this.categories = categories;
            },
            err => {
              console.log(err);
            }
        );
  }

  setCurrentBusiness(business: IBusiness): void {
    if (this.isFormEnabled) {
      this.isFormEnabled = false;
    }

    this.currentBusiness = business;
  }

  enableForm(business: IBusiness = null): void {
    if (this.currentBusiness) {
      this.currentBusiness = null;
    }

    if (business) {
      this.editedBusiness = business;
    } else {
      this.editedBusiness = null;
    }

    this.isFormEnabled = true;
  }

  onSave() {
    if (this.editedBusiness) {
      this.editedBusiness = null;
    }

    this.isFormEnabled = false;
  }

  removeBusiness(key) {
    this._firebaseService.removeBusiness(key);

    if (this.currentBusiness) {
      this.currentBusiness = null;
    }

    if (this.isFormEnabled) {
      this.isFormEnabled = false;
    }
  }

  filterByCategory(category) {
    this._firebaseService.getBusinesses(category)
      .subscribe(
        businesses => {
          this.businesses = businesses;
        },
        err => {
          console.log(err);
        }
      );
  }
}
