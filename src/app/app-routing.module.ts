import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './home';

const routes: Routes = [
  { 
    path:'home', 
    component: HomeContainerComponent,
    children:[
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component:HomeDetailComponent,
        children:[
          {
            path: 'grand',
            component: HomeGrandComponent
          },
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second '
          },
        ]
      }
    ] 
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
