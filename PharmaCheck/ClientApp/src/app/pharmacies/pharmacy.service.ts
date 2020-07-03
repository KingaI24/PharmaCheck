import { Injectable } from '@angular/core';
import { Pharmacy } from './pharmacy.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApplicationService } from '../core/services/application.service';
import { PaginatedPharmacyView } from './paginatedPharmacyView';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

    constructor(private httpClient: HttpClient, private applicationService: ApplicationService) {
    }

    getPharmacies(event?: PageEvent): Observable<PaginatedPharmacyView> {
        let pageIndex = event ? event.pageIndex + "" : "0";
        let itemsPerPage = event ? event.pageSize + "" : "3";
        let params = new HttpParams().set("page", pageIndex).set("itemsPerPage", itemsPerPage); //Create new HttpParams
        return this.httpClient.
            get<PaginatedPharmacyView>(`${this.applicationService.baseUrl}api/pharmacy`, { params: params });
    }

    getPharmacy(id: number): Observable<Pharmacy> {
        return this.httpClient
            .get<Pharmacy>(`${this.applicationService.baseUrl}api/pharmacy/${id}`);
    }

    save(pharmacy: Pharmacy): Observable<Pharmacy> {
        return this.httpClient
            .post<Pharmacy>(`${this.applicationService.baseUrl}api/pharmacy`, pharmacy);
    }

    update(pharmacy: Pharmacy): Observable<Pharmacy> {
        return this.httpClient
            .put<Pharmacy>(`${this.applicationService.baseUrl}api/pharmacy/${pharmacy.id}`, pharmacy);
    }

    delete(id: number): Observable<any> {
        return this.httpClient
            .delete<Pharmacy>(`${this.applicationService.baseUrl}api/pharmacy/${id}`);
    }

    filter(name: string): Observable<PaginatedPharmacyView> {
        if (!name) name = "";
        return this.httpClient.get<PaginatedPharmacyView>(`${this.applicationService.baseUrl}api/pharmacy?name=${name}`);
    }
}
