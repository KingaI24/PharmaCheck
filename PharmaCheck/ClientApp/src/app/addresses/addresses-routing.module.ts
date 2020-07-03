import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses.component';

const routes: Routes = [
    {
        path: '', component: AddressesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: AddressListComponent },
            { path: 'edit/:id', component: AddressEditComponent },
            { path: 'edit', component: AddressEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AddressesRoutingModule {
    static routedComponents = [AddressesComponent, AddressListComponent, AddressEditComponent];
}
