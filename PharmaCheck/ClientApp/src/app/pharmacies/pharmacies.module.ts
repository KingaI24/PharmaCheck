import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PharmacyService } from './pharmacy.service';

@NgModule({
    declarations: [PharmaciesRoutingModule.routedComponents],
    imports: [
        CommonModule,
        PharmaciesRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [PharmacyService]
})
export class PharmaciesModule { }
