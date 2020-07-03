import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliesRoutingModule } from './supplies-routing.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplyService } from './supply.service';

@NgModule({
    declarations: [SuppliesRoutingModule.routedComponents],
  imports: [
      CommonModule,
      SuppliesRoutingModule,
      AngularMaterialModule,
      CoreModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [SupplyService]
})
export class SuppliesModule { }
