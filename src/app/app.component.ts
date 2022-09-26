import { Component } from '@angular/core';
import { ImageSlider } from './components/image-slider/image-slider.component';
import { TopMenu } from './components/scrollable-tab/scrollable-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pinxx';
  TopMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机   ',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家电',
      link: ''
    },
    {
      title: '粮油',
      link: ''
    },
  ]

  imageSliders:ImageSlider[] = [
    {
      imgUrl:'https://img2.baidu.com/it/u=2180749372,3204128823&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      link:'',
      caption:''
    },
    {
      imgUrl:'https://img0.baidu.com/it/u=296560967,1683617454&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      link:'',
      caption:''
    },
    {
      imgUrl:'https://img2.baidu.com/it/u=792038472,827733466&fm=253&fmt=auto&app=138&f=JPG?w=888&h=500',
      link:'',
      caption:''
    },
  ]

  handleTabSelected(topMenu:TopMenu){
    console.log('topMenu:',topMenu)
  }
}
