import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Address } from './address.model';
import { ApplicationService } from '../core/services/application.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

    constructor(private httpClient: HttpClient, private applicationService: ApplicationService) {
    }

    getAddresses(): Observable<Address[]> {
        return this.httpClient.
            get<Address[]>(`${this.applicationService.baseUrl}api/address`);
    }

    getAddress(id: number): Observable<Address[]> {
        return this.httpClient
            .get<Address[]>(`${this.applicationService.baseUrl}api/address/${id}`);
    }

    save(address: Address): Observable<Address> {
        return this.httpClient
            .post<Address>(`${this.applicationService.baseUrl}api/address`, address);
    }

    update(address: Address): Observable<Address> {
        return this.httpClient
            .put<Address>(`${this.applicationService.baseUrl}api/address/${address.id}`, address);
    }

    delete(id: number): Observable<any> {
        return this.httpClient
            .delete<Address>(`${this.applicationService.baseUrl}api/address/${id}`);
    }
}
