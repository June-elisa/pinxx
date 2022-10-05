import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // username = ''
  private _username = '';
  @Output() usernameChange = new EventEmitter(); 
  @Emoji() result = 'Hello'; // 表情注解 -- 无参数


  constructor() { }

  ngOnInit() {
  }

  // 模拟双向绑定
  @Input()
  public get username():string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }

  input(event){
    this.username = event.target.value
  }

  // 确认注解 -- 有参数
  @Confirmable('您确认要执行吗？')
  handleClick(){
    console.log('点击已执行')
  }
}
