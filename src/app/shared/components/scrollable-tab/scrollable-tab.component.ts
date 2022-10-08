import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
})
/**
 * 接口是可选的，也就是说只要有类似 ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口，好处一个是不会误删除某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */
export class ScrollableTabComponent implements OnInit,OnChanges {
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff'
  @Input() titleColor = 'blue'
  @Input() titleActiveColor = 'yellow'
  @Input() indicatorColor = 'brown'
  @Output() tabSelected = new EventEmitter();

  selectIndex = -1;
  dict: Dict = {
    a: '1',
    b: '2',
  };
  /**
   * 构造函数永远首先被调用 
   */
  constructor() {
    console.log('组件构造调用');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变',changes)
  }

  add: AddFunc = (x, y) => x + y;

  handleSelection(i: number) {
    this.selectIndex = i;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }

  /**
   * 组件初始化完成，在这个函数中，我们可以安全的使用组件的属性和方法
   */
  ngOnInit(): void {
    console.log('组件初始化')
  }
}
// interface - 对象类型
export interface TopMenu {
  id: number;
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
