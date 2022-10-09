import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/shared/components/image-slider/image-slider.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  selectedTabLink
  imageSliders:ImageSlider[] = [];
  channels: Channel[] = [];


  constructor(private route: ActivatedRoute,private service: HomeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数:',params)
      this.selectedTabLink = params.get('tabLink');
    })

    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数：',params)
    })

    this.service.getBanners().subscribe(banners => {
      this.imageSliders = banners;
    })
    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
    })
  }

}
 