import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'info/:id', component: CustomerInfoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }