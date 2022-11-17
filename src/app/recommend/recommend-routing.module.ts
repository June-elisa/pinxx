import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendContainerComponent } from './component/recommend-container/recommend-container.component';

const routes: Routes = [
  {path:'recommend', component: RecommendContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
