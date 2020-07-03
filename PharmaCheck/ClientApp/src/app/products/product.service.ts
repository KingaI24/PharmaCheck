import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApplicationService } from '../core/services/application.service';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { Product } from './product.model';
import { PaginatedProductView } from './paginatedproductview';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private httpClient: HttpClient, private applicationService: ApplicationService) {
    }

    getProducts(event?: PageEvent): Observable<PaginatedProductView> {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new HttpParams().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get<PaginatedProductView>(`${this.applicationService.baseUrl}api/product`, { params: params });
    }

    getProduct(id: number): Observable<Product> {
        return this.httpClient
            .get<Product>(`${this.applicationService.baseUrl}api/product/${id}`);
    }

    save(product: Product): Observable<Product> {
        return this.httpClient
            .post<Product>(`${this.applicationService.baseUrl}api/product`, product);
    }

    update(product: Product): Observable<Product> {
        return this.httpClient
            .put<Product>(`${this.applicationService.baseUrl}api/product/${product.id}`, product);
    }

    delete(id: number): Observable<any> {
        return this.httpClient
            .delete<Product>(`${this.applicationService.baseUrl}api/product/${id}`);
    }

    filter(substance: string): Observable<PaginatedProductView> {
        if (!substance) substance = "";
        return this.httpClient.get<PaginatedProductView>(`${this.applicationService.baseUrl}api/product?name=${name}`);
    }
}
