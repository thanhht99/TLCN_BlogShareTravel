import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListToursComponent } from './list-tours.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: 'list', component: ListToursComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
