import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css'],
})
export class HomeGrandComponent implements OnInit {
  obj = {
    productId: 2,
    productName: '13pro',
    model: 'm',
    type: 'mobile phone',
  };
  date:Date;

  constructor() {}

  ngOnInit() {
    this.date  = this.minusDays(new Date(), 60);
  }

  minusDays(date:Date, days:number){
     const result = new Date(date);
     result.setDate(result.getDate() - days);
     return result
  }
}
