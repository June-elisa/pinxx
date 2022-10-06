import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit { 
    @Input() appGridItemImage = '2rem';
    @Input() fitMode = 'cover';


    constructor( private elr:ElementRef, private rd2:Renderer2){

    }

    ngOnInit(): void {
        // 声明自己占据模版中的 image 区块
        this.setStyle('grid-area','image')
        this.setStyle('width',this.appGridItemImage)
        this.setStyle('height',this.appGridItemImage)
        this.setStyle('object-fit',this.fitMode)        
    }

    private setStyle(styleName: string, styleValue: string){
        this.rd2.setStyle(this.elr.nativeElement,styleName,styleValue)
    }

    // 参数1：事件名称， 参数2:传递事件携带的数据
    @HostListener('click',['$event.target'])
    handleClick(ev) {
        console.log(ev);
    }
}