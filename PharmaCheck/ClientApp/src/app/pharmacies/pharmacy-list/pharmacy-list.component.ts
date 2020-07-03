import { Component, OnInit } from '@angular/core';
import { Pharmacy } from '../pharmacy.model';
import { PharmacyService } from '../pharmacy.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PaginatedPharmacyView } from '../paginatedPharmacyView';

@Component({
    selector: 'app-pharmacy-list',
    templateUrl: './pharmacy-list.component.html',
    styleUrls: ['./pharmacy-list.component.css']
})
export class PharmacyListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'action', 'address'];
    pharmacies: PaginatedPharmacyView;
    pageEvent: PageEvent;

    constructor(private pharmacyService: PharmacyService, private router: Router) { }

    ngOnInit() {
        this.loadPharmacies(null);
    }

    loadPharmacies(event?: PageEvent) {
        this.pharmacyService.getPharmacies(event)
            .subscribe(res => {
                this.pharmacies = res;
                console.log(this.pharmacies.items);
        });
    }

    delete(pharmacy: Pharmacy) {
        this.pharmacyService.delete(pharmacy.id).subscribe(x => {
            this.loadPharmacies();
        });
    }
}
