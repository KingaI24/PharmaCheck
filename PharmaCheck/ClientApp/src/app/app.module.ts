import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'supplies', loadChildren: './supplies/supplies.module#SuppliesModule' },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'pharmacies', loadChildren: './pharmacies/pharmacies.module#PharmaciesModule' },
    { path: 'addresses', loadChildren: './addresses/addresses.module#AddressesModule' },
];
 
@NgModule({
  declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        RegistrationComponent,
        LoginComponent
  ],
  imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AngularMaterialModule,
        BrowserAnimationsModule
    ],
   exports: [AngularMaterialModule, CoreModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
