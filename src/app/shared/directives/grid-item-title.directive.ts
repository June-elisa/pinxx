import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective  implements OnInit { 
    // 一个变量可以同时被多个装饰器修饰
    @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem'
    @HostBinding('style.grid-area') area = 'title';
    // @HostBinding('style.font-size') size = this.appGridItemTitle;

    constructor( private elr:ElementRef, private rd2:Renderer2){

    }

    ngOnInit(): void {
        // this.rd2.setStyle(this.elr.nativeElement,'grid-area','title')
    }
}