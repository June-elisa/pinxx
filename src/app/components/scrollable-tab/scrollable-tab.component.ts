import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
})
export class ScrollableTabComponent implements OnInit {
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  selectIndex = -1;
  dict: Dict = {
    a: '1',
    b: '2',
  };

  constructor() {
    console.log(this.dict['a']);
  }

  add: AddFunc = (x, y) => x + y;

  handleSelection(i: number) {
    this.selectIndex = i;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }

  ngOnInit(): void {}
}
// interface - 对象类型
export interface TopMenu {
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
