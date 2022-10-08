import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
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
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    AgoPipe,
  ]
})
export class SharedModule { }
