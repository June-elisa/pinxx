import { Component } from '@angular/core';
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

  handleTabSelected(topMenu:TopMenu){
    console.log('topMenu:',topMenu)
  }
}
