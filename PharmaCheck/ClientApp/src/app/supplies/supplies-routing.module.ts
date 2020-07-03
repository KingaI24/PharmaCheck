import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplyEditComponent } from './supply-edit/supply-edit.component';
import { SupplyListComponent } from './supply-list/supply-list.component';
import { SuppliesComponent } from './supplies.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: SuppliesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: SupplyListComponent },
            { path: 'edit/:id', component: SupplyEditComponent },
            { path: 'edit', component: SupplyEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SuppliesRoutingModule {
    static routedComponents = [SuppliesComponent, SupplyListComponent, SupplyEditComponent];
}
