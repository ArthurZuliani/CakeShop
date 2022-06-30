import {Injectable} from "@angular/core";
import {CakeStore} from "./state/cake.store";

@Injectable({providedIn: 'root'})
export class GlobalService {

  constructor(private cakeStore: CakeStore) {
  }

  updateCake(total: number) {
    this.cakeStore.update({
      total
    });
  }
}
