import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { TabItem } from './shared/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedIndex$: Observable<number>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(tab => this.getSelectedIndex(tab))
    );
  }

  handleSelect(tab: TabItem) {
    this.router.navigate([tab.link])
  }

  getSelectedIndex(tab: string) {
    let index = 0;
    switch (tab) {
      case 'recommend':
        index = 1;
        break;
      case 'category':
        index = 2;
        break;
      case 'chat':
        index = 3;
        break;
      case 'my':
        index = 4;
        break;
    }
    return index;
  }
}
