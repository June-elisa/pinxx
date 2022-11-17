import { Component, ElementRef, Inject, InjectionToken, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, fromEvent, map, Observable } from 'rxjs';
import { ImageSliderComponent } from 'src/app/shared/components/image-slider/image-slider.component';
import { TopMenu } from 'src/app/shared/components/scrollable-tab/scrollable-tab.component';
import { token } from '../../services';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  @ViewChild('inputRef',{static:true}) input: ElementRef;
  @ViewChild('imageSlider') imgSlider!: ImageSliderComponent;
  title = 'pinxx';
  TopMenus: TopMenu[] = [];
  username = '';
  startDate = new Date(2022, 6, 1);
  futureDate = new Date(2022, 6, 2)

  selectedTabLink$: Observable<string>;
  constructor(
    private router: Router, 
    private service: HomeService,
    private route: ActivatedRoute,
    @Inject(token) private baseUrl: String
    ) {}

  ngOnInit() {
    this.service.getTabs().subscribe(tabs => {
      this.TopMenus = tabs
    })

    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )

    fromEvent(this.input.nativeElement,'input')
      .subscribe((ev:any) => console.log(ev.target.value));

     console.log('hello')
  }

  handleTabSelected(topMenu: TopMenu) {
    console.log('topMenu:', topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

  ngAfterViewInit(): void {
    console.log('imageSlider:', this.imgSlider);
  }
}
