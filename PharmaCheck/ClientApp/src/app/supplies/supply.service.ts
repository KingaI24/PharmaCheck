import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApplicationService } from '../core/services/application.service';
import { PageEvent } from '@angular/material/paginator';
import { PaginatedSupplyView } from './paginatedsupplyview';
import { Observable } from 'rxjs';
import { Supply } from './supply.model';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

    constructor(private httpClient: HttpClient, private applicationService: ApplicationService) {
    }

    getSupplies(event?: PageEvent): Observable<PaginatedSupplyView> {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new HttpParams().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get<PaginatedSupplyView>(`${this.applicationService.baseUrl}api/supply`, { params: params });
    }

    getSupply(id: number): Observable<Supply> {
        return this.httpClient
            .get<Supply>(`${this.applicationService.baseUrl}api/supply/${id}`);
    }

    save(supply: Supply): Observable<Supply> {
        return this.httpClient
            .post<Supply>(`${this.applicationService.baseUrl}api/supply`, supply);
    }

    update(supply: Supply): Observable<Supply> {
        return this.httpClient
            .put<Supply>(`${this.applicationService.baseUrl}api/supply/${supply.id}`, supply);
    }

    delete(id: number): Observable<any> {
        return this.httpClient
            .delete<Supply>(`${this.applicationService.baseUrl}api/supply/${id}`);
    }

    filter(product: string): Observable<PaginatedSupplyView> {
        if (!product) product = "";
        return this.httpClient.get<PaginatedSupplyView>(`${this.applicationService.baseUrl}api/supply?name=${name}`);
    }
}
