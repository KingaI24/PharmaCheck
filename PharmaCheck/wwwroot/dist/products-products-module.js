(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit/product-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit/product-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    Add/Edit product\r\n</p>\r\n\r\n<mat-card class=\"example-card\">\r\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n        <div class=\"example-container\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('name').touched && formGroup.get('name').errors && formGroup.get('name').errors.required\">\r\n                    Name required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Active Substance\" formControlName=\"activeSubstance\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('activeSubstance').touched && formGroup.get('activeSubstance').errors && formGroup.get('activeSubstance').errors.required\">\r\n                    Active Substance required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Dosage\" formControlName=\"dosage\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('dosage').touched && formGroup.get('dosage').errors && formGroup.get('dosage').errors.required\">\r\n                    Dosage required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"fill\">\r\n                <select formControlName=\"formulation\" placeholder=\"Formulation\">\r\n                    <option *ngFor=\"let formulation of formulations\" [value]=\"formulation.value\">\r\n                        {{formulation.name}}\r\n                    </option>\r\n                </select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"fill\">\r\n                <select formControlName=\"onPrescription\" placeholder=\"OnPrescription\">\r\n                    <option *ngFor=\"let onPrescription of onPrescriptions\" [value]=\"onPrescription.value\">\r\n                        {{onPrescription.name}}\r\n                    </option>\r\n                </select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"RCP\" formControlName=\"rcp\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('rcp').touched && formGroup.get('rcp').errors && formGroup.get('rcp').errors.required\">\r\n                    RCP required!\r\n                </mat-error>\r\n                <!--<mat-error *ngIf=\"rcp.hasError('pattern')\">\r\n                    Url Pattern Invalid\r\n                </mat-error>-->\r\n            </mat-form-field>\r\n\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n            <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n        </div>\r\n    </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-paginator [length]=\"products?.totalItems\"\r\n               [pageSize]=\"products?.itemsPerPage\"\r\n               [pageSizeOptions]=\"[3,6]\"\r\n               (page)=\"pageEvent = loadProducts($event)\">\r\n</mat-paginator>\r\n\r\n<table mat-table [dataSource]=\"products?.items\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Name </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"activeSubstance\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Active Substance </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.activeSubstance}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dosage\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Dosage </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.dosage}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"formulation\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Formulation </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.formulation}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"onPrescription\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Prescription Needed </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.onPrescription}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"totalSupplier\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Number of Suppliers </th>\r\n        <td mat-cell *matCellDef=\"let product\"> {{product.totalSupplier}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"rcp\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> RCP </th>\r\n        <td mat-cell *matCellDef=\"let product\"><a href=\"{{product.rcp}}\">a</a> </td>\r\n    </ng-container>\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let product\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', product.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"delete(product)\">delete</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' class=\"btn btn-dark\"><b>+</b></button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ProductEditComponent = class ProductEditComponent {
    constructor(router, route, productService, formBuilder) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
        this.urlpattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
        this.formulations = [
            { value: 0, name: "tablet" },
            { value: 1, name: "capsule" },
            { value: 2, name: "suppository" },
            { value: 3, name: "suspension" },
            { value: 4, name: "solution" },
            { value: 5, name: "injectable" },
            { value: 6, name: "perfuzable" },
            { value: 7, name: "IUD" },
        ];
        this.onPrescriptions = [
            { value: false, name: "no" },
            { value: true, name: "yes" },
        ];
    }
    ngOnInit() {
        this.prodid = parseInt(this.route.snapshot.params['id']);
        if (this.prodid) {
            this.routerLink = '../../list';
            this.productService.getProduct(this.prodid).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let product = this.formGroup.value;
            if (this.isEdit) {
                product.id = this.prodid;
                this.productService.update(product).subscribe(res => {
                    this.router.navigate(['/products']);
                });
            }
            else {
                this.productService.save(product).subscribe(res => {
                    this.router.navigate(['/products']);
                });
            }
        }
    }
    initForm(product) {
        this.formGroup = this.formBuilder.group({
            name: [product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            activeSubstance: [product.activeSubstance, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dosage: [product.dosage, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formulation: [product.formulation, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            onPrescription: [product.onPrescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            rcp: [product.rcp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.urlpattern)]],
        });
    }
};
ProductEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
ProductEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-edit/product-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/product-edit/product-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], ProductEditComponent);



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ProductListComponent = class ProductListComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.displayedColumns = ['name', 'activeSubstance', 'dosage', 'formulation',
            'onPrescription', 'totalSupplier', 'rcp', 'action'];
    }
    ngOnInit() {
        this.loadProducts(null);
    }
    loadProducts(event) {
        this.productService.getProducts(event)
            .subscribe(res => {
            this.products = res;
            console.log(this.products.items);
        });
    }
    delete(product) {
        this.productService.delete(product.id).subscribe(x => {
            this.loadProducts();
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/product-list/product-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list/product-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ProductService = class ProductService {
    constructor(httpClient, applicationService) {
        this.httpClient = httpClient;
        this.applicationService = applicationService;
    }
    getProducts(event) {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get(`${this.applicationService.baseUrl}api/product`, { params: params });
    }
    getProduct(id) {
        return this.httpClient
            .get(`${this.applicationService.baseUrl}api/product/${id}`);
    }
    save(product) {
        return this.httpClient
            .post(`${this.applicationService.baseUrl}api/product`, product);
    }
    update(product) {
        return this.httpClient
            .put(`${this.applicationService.baseUrl}api/product/${product.id}`, product);
    }
    delete(id) {
        return this.httpClient
            .delete(`${this.applicationService.baseUrl}api/product/${id}`);
    }
    filter(substance) {
        if (!substance)
            substance = "";
        return this.httpClient.get(`${this.applicationService.baseUrl}api/product?name=${name}`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
ProductService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], ProductService);



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"] },
            { path: 'edit/:id', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"] },
            { path: 'edit', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"] },
        ]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule.routedComponents = [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"], _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"]];
ProductsRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map