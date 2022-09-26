import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  // @ViewChild('imageSlider',{static: true}) 
  // imgSlider:ElementRef;
  @ViewChild('imageSlider', { static: true })
  imgSlider!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.imgSlider)
    this.imgSlider.nativeElement.innerHTML = `<h1>hello</h1>`
  }

}
 