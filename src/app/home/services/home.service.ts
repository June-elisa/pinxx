import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel } from 'src/app/shared/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/shared/components/image-slider/image-slider.component';
import { TopMenu } from 'src/app/shared/components/scrollable-tab/scrollable-tab.component';
import { environment } from 'src/environments/environment';
import { HomeModule } from '../home.module';

@Injectable({
  providedIn: 'root'
  // providedIn: HomeModule -- 注入到模块
})
export class HomeService {
  constructor(private http: HttpClient){

  }

  getTabs() {
    // 把返回结果转化为 TopMenu[] 类型，默认会转为object
    return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`,{params: {icode: `${environment.icode}`}})
  }

  getChannels(){
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`,{params: {icode: `${environment.icode}`}})
  }

  getBanners(){
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`,{params: {icode: `${environment.icode}`}})
  }
}