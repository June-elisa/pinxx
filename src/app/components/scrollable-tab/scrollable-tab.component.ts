import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
  selectIndex = -1;
  menus: TopMenu[] = [
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

  dict: Dict = {
    a: '1',
    b: '2'
  }

  constructor() {
    console.log(this.dict['a']);
  }

  add: AddFunc = (x, y) => x + y;

  handleSelection(i:number){
    this.selectIndex = i;
  }

  ngOnInit(): void {
  }

}
// interface - 对象类型
interface TopMenu {
  title: string;
  link?: string;
}

// interface - 函数类型
interface AddFunc {
  (x: number, y: number): number;
}

// interface - 索引类型
interface Dict {
  [key: string]: string;
}