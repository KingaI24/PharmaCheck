import { NgModule } from '@angular/core';
import { PharmacyEditComponent } from './pharmacy-edit/pharmacy-edit.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PharmaciesComponent } from './pharmacies.component';

const routes: Routes = [
    {
        path: '', component: PharmaciesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: PharmacyListComponent },
            { path: 'edit/:id', component: PharmacyEditComponent },
            { path: 'edit', component: PharmacyEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PharmaciesRoutingModule {
    static routedComponents = [PharmaciesComponent, PharmacyListComponent, PharmacyEditComponent];
}
