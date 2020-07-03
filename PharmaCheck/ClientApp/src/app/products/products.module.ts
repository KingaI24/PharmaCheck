import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
    declarations: [ProductsRoutingModule.routedComponents],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ProductService]
})
export class ProductsModule { }
