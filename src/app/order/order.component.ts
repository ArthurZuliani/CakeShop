import {Component, OnInit} from '@angular/core';
import {CakeQuery} from "../state/cake.query";
import {CakeStore} from "../state/cake.store";
import {GlobalService} from "../global-service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cakes: number = 0;

  constructor(private cakeQuery: CakeQuery, private cakeStore: CakeStore, private globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.cakeQuery.select().subscribe(res => this.cakes = res.total);
  }

  addCake() {
    this.globalService.updateCake(this.cakes + 1);
  }

  removeCake() {
    this.globalService.updateCake(this.cakes - 1);
  }

}
