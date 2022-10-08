import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/product/product.module';

// @Injectable()
// class Product {
//   constructor(private name: string) {}
// }
// @Injectable()
// class PurchaseOrder {
//   private amount: number;
//   constructor(private product: Product) {
//     // this.product = new Product('大米手机')
//   }
// }

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
  date: Date;

  constructor() {}

  ngOnInit() {
    this.date = this.minusDays(new Date(), 60);
    // const product = new Product('大米先生');
    // const purchaseOrder = new PurchaseOrder(product);
    // const token = new InjectionToken<string>('baseUrl')
    // const injector = Injector.create({
    //   providers: [
    //     {
    //       provide: Product,
    //       // useClass: Product,
    //       useFactory: () => {
    //         return new Product('大米先生');
    //       },
    //     },
    //     {
    //       provide: PurchaseOrder,
    //       useClass: PurchaseOrder,
    //       deps: [Product],
    //     },
    //     {
    //       provide: token,
    //       useValue:'http://localhost:8080'
    //     }
    //   ],
    // });
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
