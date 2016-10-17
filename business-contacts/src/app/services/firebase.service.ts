import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { IBusiness, ICategory } from "../shared/models";

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<IBusiness[]>;
  categories: FirebaseListObservable<ICategory[]>;

  constructor(private _af: AngularFire) { }

  getBusinesses(category: string = null) {
    if (category) {
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      });
    } else {
      this.businesses = this._af.database.list('/businesses');
    }

    return this.businesses;
  }

  getCategories() {
    this.categories = this._af.database.list('/categories');
    return this.categories;
  }

  removeBusiness(key: string) {
    return this.businesses.remove(key);
  }

  addBusiness(business: IBusiness) {
    return this.businesses.push(business);
  }

  updateBusiness(key: string, business: IBusiness) {
    return this.businesses.update(key, business);
  }
}
