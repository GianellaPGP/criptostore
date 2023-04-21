import { Component, OnInit } from '@angular/core';
import  {Coin}  from './coin';
import { COINS } from './mock-coins';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  title: string ="Coins";
  coins= COINS;
  selectedCoin?: Coin;
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  onSelect(coin: Coin): void{
    this.selectedCoin=coin;
  }


  

}
