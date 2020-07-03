(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplies-supplies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supplies.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supplies.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-edit/supply-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-edit/supply-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>supply-edit works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-list/supply-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-list/supply-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-paginator [length]=\"supplies?.totalItems\"\r\n               [pageSize]=\"supplies?.itemsPerPage\"\r\n               [pageSizeOptions]=\"[3,6]\"\r\n               (page)=\"pageEvent = loadSupplies($event)\">\r\n</mat-paginator>\r\n\r\n<table mat-table [dataSource]=\"supplies?.items\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"productname\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Product Name </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.productName}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dosage\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Dosage </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.dosage}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"pharmacyname\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:20%\"> Pharmacy </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.pharmacyName}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Price </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.price}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"discount\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Discount </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.discount}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"stock\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Stock </th>\r\n        <td mat-cell *matCellDef=\"let supply\"> {{supply.stock}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let supply\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', supply.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"delete(supply)\">delete</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Add\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"add(supply)\">add_circle</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Remove\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"remove(supply)\">remove_circle</mat-icon>\r\n            </button>\r\n\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' class=\"btn btn-dark\"><b>+</b></button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/supplies/supplies-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/supplies/supplies-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SuppliesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliesRoutingModule", function() { return SuppliesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supply-edit/supply-edit.component */ "./src/app/supplies/supply-edit/supply-edit.component.ts");
/* harmony import */ var _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supply-list/supply-list.component */ "./src/app/supplies/supply-list/supply-list.component.ts");
/* harmony import */ var _supplies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplies.component */ "./src/app/supplies/supplies.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
        path: '', component: _supplies_component__WEBPACK_IMPORTED_MODULE_3__["SuppliesComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_2__["SupplyListComponent"] },
            { path: 'edit/:id', component: _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__["SupplyEditComponent"] },
            { path: 'edit', component: _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__["SupplyEditComponent"] },
        ]
    }
];
let SuppliesRoutingModule = class SuppliesRoutingModule {
};
SuppliesRoutingModule.routedComponents = [_supplies_component__WEBPACK_IMPORTED_MODULE_3__["SuppliesComponent"], _supply_list_supply_list_component__WEBPACK_IMPORTED_MODULE_2__["SupplyListComponent"], _supply_edit_supply_edit_component__WEBPACK_IMPORTED_MODULE_1__["SupplyEditComponent"]];
SuppliesRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], SuppliesRoutingModule);



/***/ }),

/***/ "./src/app/supplies/supplies.component.css":
/*!*************************************************!*\
  !*** ./src/app/supplies/supplies.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVzL3N1cHBsaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/supplies/supplies.component.ts":
/*!************************************************!*\
  !*** ./src/app/supplies/supplies.component.ts ***!
  \************************************************/
/*! exports provided: SuppliesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliesComponent", function() { return SuppliesComponent; });
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

let SuppliesComponent = class SuppliesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SuppliesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-supplies',
        template: __importDefault(__webpack_require__(/*! raw-loader!./supplies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supplies.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./supplies.component.css */ "./src/app/supplies/supplies.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SuppliesComponent);



/***/ }),

/***/ "./src/app/supplies/supplies.module.ts":
/*!*********************************************!*\
  !*** ./src/app/supplies/supplies.module.ts ***!
  \*********************************************/
/*! exports provided: SuppliesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliesModule", function() { return SuppliesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _supplies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplies-routing.module */ "./src/app/supplies/supplies-routing.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supply.service */ "./src/app/supplies/supply.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let SuppliesModule = class SuppliesModule {
};
SuppliesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_supplies_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuppliesRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _supplies_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuppliesRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_supply_service__WEBPACK_IMPORTED_MODULE_6__["SupplyService"]]
    })
], SuppliesModule);



/***/ }),

/***/ "./src/app/supplies/supply-edit/supply-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/supplies/supply-edit/supply-edit.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVzL3N1cHBseS1lZGl0L3N1cHBseS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/supplies/supply-edit/supply-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/supplies/supply-edit/supply-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: SupplyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyEditComponent", function() { return SupplyEditComponent; });
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

let SupplyEditComponent = class SupplyEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupplyEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-supply-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./supply-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-edit/supply-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./supply-edit.component.css */ "./src/app/supplies/supply-edit/supply-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SupplyEditComponent);



/***/ }),

/***/ "./src/app/supplies/supply-list/supply-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/supplies/supply-list/supply-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVzL3N1cHBseS1saXN0L3N1cHBseS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/supplies/supply-list/supply-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/supplies/supply-list/supply-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SupplyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyListComponent", function() { return SupplyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _supply_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supply.service */ "./src/app/supplies/supply.service.ts");
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



let SupplyListComponent = class SupplyListComponent {
    constructor(supplyService, router) {
        this.supplyService = supplyService;
        this.router = router;
        this.displayedColumns = ['productname', 'dosage', 'pharmacyname', 'price', 'discount',
            'stock', 'action'];
    }
    ngOnInit() {
        this.loadProducts(null);
    }
    loadProducts(event) {
        this.supplyService.getSupplies(event)
            .subscribe(res => {
            this.supplies = res;
            console.log(this.supplies.items);
        });
    }
    delete(supply) {
        this.supplyService.delete(supply.id).subscribe(x => {
            this.loadProducts();
        });
    }
    add(supply) {
        supply.stock++;
        this.supplyService.update(supply).subscribe(x => {
            this.loadProducts();
        });
    }
    remove(supply) {
        supply.stock--;
        this.supplyService.update(supply).subscribe(x => {
            this.loadProducts();
        });
    }
};
SupplyListComponent.ctorParameters = () => [
    { type: _supply_service__WEBPACK_IMPORTED_MODULE_1__["SupplyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SupplyListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-supply-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./supply-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/supplies/supply-list/supply-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./supply-list.component.css */ "./src/app/supplies/supply-list/supply-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_supply_service__WEBPACK_IMPORTED_MODULE_1__["SupplyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SupplyListComponent);



/***/ }),

/***/ "./src/app/supplies/supply.service.ts":
/*!********************************************!*\
  !*** ./src/app/supplies/supply.service.ts ***!
  \********************************************/
/*! exports provided: SupplyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyService", function() { return SupplyService; });
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



let SupplyService = class SupplyService {
    constructor(httpClient, applicationService) {
        this.httpClient = httpClient;
        this.applicationService = applicationService;
    }
    getSupplies(event) {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get(`${this.applicationService.baseUrl}api/supply`, { params: params });
    }
    getSupply(id) {
        return this.httpClient
            .get(`${this.applicationService.baseUrl}api/supply/${id}`);
    }
    save(supply) {
        return this.httpClient
            .post(`${this.applicationService.baseUrl}api/supply`, supply);
    }
    update(supply) {
        return this.httpClient
            .put(`${this.applicationService.baseUrl}api/supply/${supply.id}`, supply);
    }
    delete(id) {
        return this.httpClient
            .delete(`${this.applicationService.baseUrl}api/supply/${id}`);
    }
    filter(product) {
        if (!product)
            product = "";
        return this.httpClient.get(`${this.applicationService.baseUrl}api/supply?name=${name}`);
    }
};
SupplyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
SupplyService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], SupplyService);



/***/ })

}]);
//# sourceMappingURL=supplies-supplies-module.js.map