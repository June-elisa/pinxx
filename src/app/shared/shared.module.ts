import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';
import { CountDownComponent } from './components/count-down/count-down.component'
import { FooterComponent } from './components/footer/footer.component'
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective } from './directives';
import { AgoPipe } from './pipes';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    TagDirective,    
    AgoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    TagDirective,
    AgoPipe,
    
  ]
})
export class SharedModule { }
