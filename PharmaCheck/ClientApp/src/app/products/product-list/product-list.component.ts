import { Component, OnInit } from '@angular/core';
import { PaginatedProductView } from '../paginatedproductview';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'activeSubstance', 'dosage', 'formulation',
        'onPrescription', 'totalSupplier', 'rcp', 'action'];
    products: PaginatedProductView;
    pageEvent: PageEvent;

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.loadProducts(null);
    }

    loadProducts(event?: PageEvent) {
        this.productService.getProducts(event)
            .subscribe(res => {
                this.products = res;
                console.log(this.products.items);
            });
    }

    delete(product: Product) {
        this.productService.delete(product.id).subscribe(x => {
            this.loadProducts();
        });
    }

}
