import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesRoutingModule } from './addresses-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressService } from './address.service';

@NgModule({
    declarations: [AddressesRoutingModule.routedComponents],
    imports: [
        CommonModule,
        AddressesRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AddressService]
})
export class AddressesModule { }
