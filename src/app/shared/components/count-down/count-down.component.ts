import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Observable, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  private _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;

  constructor() {}

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(
      this.startDate,
      this.futureDate
    );
  }

  private getCountDownObservable(startDate: Date, futureDate: Date) {
    // interval:每隔一定时间，流里会产生一个数字，这个数字每次 +1
    return interval(1000).pipe(
      map((elapse) => this.diffInSec(startDate, futureDate) - elapse),
      takeWhile((gap) => gap >= 0), // takeWhile:表达式为false时，结束这个流
      // tap(val => console.log(val)), // tap：想查看当前的值，可以用这个操作符
      map((sec) => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60),
      })),
      map(({ hour, second, minute }) => `${hour}:${minute}:${second}`) // 把对象转换为字符,解构
    );
  }

  // 函数式写法，和普通写法效果一样
  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  };
}
