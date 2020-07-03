(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pharmacies-pharmacies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacies.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacies.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\r\n    Add/Edit pharmacy\r\n</h1>\r\n\r\n<mat-card class=\"example-card\">\r\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n        <div class=\"example-container\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\" formControlName=\"name\" type=\"text\">\r\n                <mat-error *ngIf=\"formGroup.get('name').touched &&\r\n                           formGroup.get('name').errors &&\r\n                           formGroup.get('name').errors.required\">\r\n                    Name required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Address\" formControlName=\"addresses\" type=\"text\">\r\n                <mat-error *ngIf=\"formGroup.get('addresses').touched &&\r\n                           formGroup.get('addresses').errors &&\r\n                           formGroup.get('addresses').errors.required\">\r\n                    Address required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <div formArrayName=\"addresses\">\r\n                <div *ngFor=\"let a of formGroup.controls.addresses.controls; let i=index\">\r\n                    <div [formGroupName]='i' class=\"form-control\">\r\n                        <input type=\"text\" formControlName='{{a}}'>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"example-button-row\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n                <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n            </div>\r\n        </div>\r\n</form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-list/pharmacy-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-list/pharmacy-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-paginator [length]=\"pharmacies?.totalItems\"\r\n               [pageSize]=\"pharmacies?.itemsPerPage\"\r\n               [pageSizeOptions]=\"[3,6]\"\r\n               (page)=\"pageEvent = loadPharmacies($event)\">\r\n</mat-paginator>\r\n\r\n<table mat-table [dataSource]=\"pharmacies?.items\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Name </th>\r\n        <td mat-cell *matCellDef=\"let pharmacy\"> {{pharmacy.name}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let pharmacy\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', pharmacy.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"delete(pharmacy)\">delete</mat-icon>\r\n            </button>\r\n\r\n        </td>\r\n    </ng-container>\r\n\r\n    <!-- Address Column -->\r\n    <ng-container matColumnDef=\"address\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:23%\"> Address </th>\r\n        <td mat-cell *matCellDef=\"let pharmacy\">\r\n            <mat-list *ngFor=\"let address of pharmacy.addresses\">\r\n                <mat-list-item>{{address.description}}</mat-list-item>\r\n                <mat-divider></mat-divider>\r\n            </mat-list>\r\n        </td>\r\n    </ng-container>\r\n\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' class=\"btn btn-dark\"><b>+</b></button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pharmacies/pharmacies-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pharmacies/pharmacies-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PharmaciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesRoutingModule", function() { return PharmaciesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pharmacy_edit_pharmacy_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharmacy-edit/pharmacy-edit.component */ "./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.ts");
/* harmony import */ var _pharmacy_list_pharmacy_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pharmacy-list/pharmacy-list.component */ "./src/app/pharmacies/pharmacy-list/pharmacy-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pharmacies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pharmacies.component */ "./src/app/pharmacies/pharmacies.component.ts");
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
        path: '', component: _pharmacies_component__WEBPACK_IMPORTED_MODULE_4__["PharmaciesComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _pharmacy_list_pharmacy_list_component__WEBPACK_IMPORTED_MODULE_2__["PharmacyListComponent"] },
            { path: 'edit/:id', component: _pharmacy_edit_pharmacy_edit_component__WEBPACK_IMPORTED_MODULE_1__["PharmacyEditComponent"] },
            { path: 'edit', component: _pharmacy_edit_pharmacy_edit_component__WEBPACK_IMPORTED_MODULE_1__["PharmacyEditComponent"] },
        ]
    }
];
let PharmaciesRoutingModule = class PharmaciesRoutingModule {
};
PharmaciesRoutingModule.routedComponents = [_pharmacies_component__WEBPACK_IMPORTED_MODULE_4__["PharmaciesComponent"], _pharmacy_list_pharmacy_list_component__WEBPACK_IMPORTED_MODULE_2__["PharmacyListComponent"], _pharmacy_edit_pharmacy_edit_component__WEBPACK_IMPORTED_MODULE_1__["PharmacyEditComponent"]];
PharmaciesRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PharmaciesRoutingModule);



/***/ }),

/***/ "./src/app/pharmacies/pharmacies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pharmacies/pharmacies.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXJtYWNpZXMvcGhhcm1hY2llcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pharmacies/pharmacies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pharmacies/pharmacies.component.ts ***!
  \****************************************************/
/*! exports provided: PharmaciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesComponent", function() { return PharmaciesComponent; });
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

let PharmaciesComponent = class PharmaciesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PharmaciesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pharmacies',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pharmacies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacies.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pharmacies.component.css */ "./src/app/pharmacies/pharmacies.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], PharmaciesComponent);



/***/ }),

/***/ "./src/app/pharmacies/pharmacies.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pharmacies/pharmacies.module.ts ***!
  \*************************************************/
/*! exports provided: PharmaciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciesModule", function() { return PharmaciesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pharmacies-routing.module */ "./src/app/pharmacies/pharmacies-routing.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pharmacy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pharmacy.service */ "./src/app/pharmacies/pharmacy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let PharmaciesModule = class PharmaciesModule {
};
PharmaciesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_2__["PharmaciesRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pharmacies_routing_module__WEBPACK_IMPORTED_MODULE_2__["PharmaciesRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_pharmacy_service__WEBPACK_IMPORTED_MODULE_6__["PharmacyService"]]
    })
], PharmaciesModule);



/***/ }),

/***/ "./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXJtYWNpZXMvcGhhcm1hY3ktZWRpdC9waGFybWFjeS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: PharmacyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyEditComponent", function() { return PharmacyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pharmacy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pharmacy.service */ "./src/app/pharmacies/pharmacy.service.ts");
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




let PharmacyEditComponent = class PharmacyEditComponent {
    constructor(router, route, pharmacyService, formBuilder) {
        this.router = router;
        this.route = route;
        this.pharmacyService = pharmacyService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
    ngOnInit() {
        this.pharmid = parseInt(this.route.snapshot.params['id']);
        if (this.pharmid) {
            this.routerLink = '../../list';
            this.pharmacyService.getPharmacy(this.pharmid).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initFormForSave({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let pharmacy = this.formGroup.value;
            if (this.isEdit) {
                pharmacy.id = this.pharmid;
                this.pharmacyService.update(pharmacy).subscribe(res => {
                    this.router.navigate(['/pharmacies']);
                });
            }
            else {
                this.pharmacyService.save(pharmacy).subscribe(res => {
                    this.router.navigate(['/pharmacies']);
                });
            }
        }
    }
    initForm(pharmacy) {
        this.formGroup = this.formBuilder.group({
            name: [pharmacy.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addresses: this.formBuilder.array(this.loadAddresses(pharmacy))
        });
        console.log(this.loadAddresses(pharmacy));
        console.log(this.formGroup);
    }
    loadAddresses(pharmacy) {
        return pharmacy.addresses.map(p => this.formBuilder.group({
            description: p.description
        }));
    }
    initFormForSave(pharmacy) {
        this.formGroup = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    addAddresses() {
        this.addresses.push(this.formBuilder.control(''));
    }
};
PharmacyEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _pharmacy_service__WEBPACK_IMPORTED_MODULE_3__["PharmacyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
PharmacyEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pharmacy-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pharmacy-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pharmacy-edit.component.css */ "./src/app/pharmacies/pharmacy-edit/pharmacy-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _pharmacy_service__WEBPACK_IMPORTED_MODULE_3__["PharmacyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], PharmacyEditComponent);



/***/ }),

/***/ "./src/app/pharmacies/pharmacy-list/pharmacy-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pharmacies/pharmacy-list/pharmacy-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\r\n    background-color: #ddd;\r\n    border: none;\r\n    color: black;\r\n    padding: 10px 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhcm1hY2llcy9waGFybWFjeS1saXN0L3BoYXJtYWN5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BoYXJtYWNpZXMvcGhhcm1hY3ktbGlzdC9waGFybWFjeS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pharmacies/pharmacy-list/pharmacy-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pharmacies/pharmacy-list/pharmacy-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: PharmacyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyListComponent", function() { return PharmacyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pharmacy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pharmacy.service */ "./src/app/pharmacies/pharmacy.service.ts");
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



let PharmacyListComponent = class PharmacyListComponent {
    constructor(pharmacyService, router) {
        this.pharmacyService = pharmacyService;
        this.router = router;
        this.displayedColumns = ['name', 'action', 'address'];
    }
    ngOnInit() {
        this.loadPharmacies(null);
    }
    loadPharmacies(event) {
        this.pharmacyService.getPharmacies(event)
            .subscribe(res => {
            this.pharmacies = res;
            console.log(this.pharmacies.items);
        });
    }
    delete(pharmacy) {
        this.pharmacyService.delete(pharmacy.id).subscribe(x => {
            this.loadPharmacies();
        });
    }
};
PharmacyListComponent.ctorParameters = () => [
    { type: _pharmacy_service__WEBPACK_IMPORTED_MODULE_1__["PharmacyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PharmacyListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pharmacy-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pharmacy-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharmacies/pharmacy-list/pharmacy-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pharmacy-list.component.css */ "./src/app/pharmacies/pharmacy-list/pharmacy-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_pharmacy_service__WEBPACK_IMPORTED_MODULE_1__["PharmacyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PharmacyListComponent);



/***/ }),

/***/ "./src/app/pharmacies/pharmacy.service.ts":
/*!************************************************!*\
  !*** ./src/app/pharmacies/pharmacy.service.ts ***!
  \************************************************/
/*! exports provided: PharmacyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyService", function() { return PharmacyService; });
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



let PharmacyService = class PharmacyService {
    constructor(httpClient, applicationService) {
        this.httpClient = httpClient;
        this.applicationService = applicationService;
    }
    getPharmacies(event) {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get(`${this.applicationService.baseUrl}api/pharmacy`, { params: params });
    }
    getPharmacy(id) {
        return this.httpClient
            .get(`${this.applicationService.baseUrl}api/pharmacy/${id}`);
    }
    save(pharmacy) {
        return this.httpClient
            .post(`${this.applicationService.baseUrl}api/pharmacy`, pharmacy);
    }
    update(pharmacy) {
        return this.httpClient
            .put(`${this.applicationService.baseUrl}api/pharmacy/${pharmacy.id}`, pharmacy);
    }
    delete(id) {
        return this.httpClient
            .delete(`${this.applicationService.baseUrl}api/pharmacy/${id}`);
    }
    filter(name) {
        if (!name)
            name = "";
        return this.httpClient.get(`${this.applicationService.baseUrl}api/pharmacy?name=${name}`);
    }
};
PharmacyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
PharmacyService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], PharmacyService);



/***/ })

}]);
//# sourceMappingURL=pharmacies-pharmacies-module.js.map