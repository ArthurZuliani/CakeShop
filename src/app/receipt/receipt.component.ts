import {Component, OnInit} from '@angular/core';
import {CakeQuery} from "../state/cake.query";
import {CakeStore} from "../state/cake.store";
import {GlobalService} from "../global-service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  cakes: number = 0;

  constructor(private cakeQuery: CakeQuery, private cakeStore: CakeStore, private globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.cakeQuery.select().subscribe(res => this.cakes = res.total);
  }
}
