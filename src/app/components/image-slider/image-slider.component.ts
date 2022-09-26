import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  // static为true:静态，没在ngIf、ngFor包含之下
  @ViewChild('imageSlider', { static: true }) imgSlider!: ElementRef;
  @ViewChildren('img') imgs!: QueryList<ElementRef>

  constructor(private rd2:Renderer2) { }

  ngOnInit(): void {
    console.log('ngOnInit', this.imgSlider)
    // this.imgSlider.nativeElement.innerHTML = `<h1>hello</h1>`
  }

  ngAfterViewInit(): void {
    // 在ngOnInit中可能为空（还没渲染出来）
    console.log('ngAfterViewInit',this.imgs)
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px')

    // angular 不建议直接操作dom(xss攻击),可以用下面这种方式
    this.imgs.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px')
    })
     
  }

}
 