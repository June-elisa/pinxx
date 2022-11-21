import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { filter, map, Observable, Subscription, switchMap } from 'rxjs';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/shared/components/image-slider/image-slider.component';
import { Ad, Product } from 'src/app/shared/domain';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
export class HomeDetailComponent implements OnInit,OnDestroy {
  selectedTabLink$: Observable<string>; // 加 $ 是个惯例，能知道是 Observable 类型的
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private service: HomeService) {}

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter((params) => params.has('tabLink')),
      map((params) => params.get('tabLink'))
    );

    this.sub = this.route.queryParamMap.subscribe((params) => {
      console.log('查询参数：', params);
    });

    this.imageSliders$ = this.service.getBanners();

    this.channels$ = this.service.getChannels();

    // 流中有流
    this.ad$ = this.selectedTabLink$.pipe(
      // switchMap相比map,可以把流中的值取出来(拍平 )
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )
    this.products$ = this.selectedTabLink$.pipe(
      // switchMap相比map,可以把流中的值取出来(拍平 )
      switchMap(tab => this.service.geProductsByTab(tab)),
    )
  }

  ngOnDestroy(): void {
    // 避免内存泄漏，取消订阅
    this.sub.unsubscribe();
  }
}

