import { Component, OnInit } from '@angular/core';
import { PaginatedSupplyView } from '../paginatedsupplyview';
import { PageEvent } from '@angular/material/paginator';
import { SupplyService } from '../supply.service';
import { Router } from '@angular/router';
import { Supply } from '../supply.model';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {

    displayedColumns: string[] = ['productname', 'dosage', 'pharmacyname', 'price', 'discount',
        'stock', 'action'];
    supplies: PaginatedSupplyView;
    pageEvent: PageEvent;
    availableStock: number;

    constructor(private supplyService: SupplyService, private router: Router) { }

    ngOnInit() {
        this.loadProducts(null);
    }

    loadProducts(event?: PageEvent) {
        this.supplyService.getSupplies(event)
            .subscribe(res => {
                this.supplies = res;
                console.log(this.supplies.items);
            });
    }

    delete(supply: Supply) {
        this.supplyService.delete(supply.id).subscribe(x => {
            this.loadProducts();
        });
    }

    add(supply: Supply) {
        supply.stock++;
        this.supplyService.update(supply).subscribe(x => {
            this.loadProducts();
        });
    }

    remove(supply: Supply) {
        supply.stock--;
        this.supplyService.update(supply).subscribe(x => {
            this.loadProducts();
        });
    }

}
