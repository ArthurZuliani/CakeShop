import {Injectable} from "@angular/core";
import {QueryEntity} from "@datorama/akita";
import {CakeState, CakeStore} from "./cake.store";
import {Cake} from "./cake.model";

@Injectable({providedIn: 'root'})
export class CakeQuery extends QueryEntity<CakeState, Cake> {

  constructor(protected cakeStore: CakeStore) {
    super(cakeStore);
  }

  getCakeTotal() {
    return this.getValue().total;
  }
}
