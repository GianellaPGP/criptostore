import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../coins/coin';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {

 @Input() coin?:Coin;
  constructor() { }


  ngOnInit(): void {
  }

  subir_precio(coin: Coin){
    coin.value=coin.value+1000;
  }

}
