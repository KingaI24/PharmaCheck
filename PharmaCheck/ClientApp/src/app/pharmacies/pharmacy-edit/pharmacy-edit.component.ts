import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';
import { Pharmacy } from '../pharmacy.model';
import { AddressService } from '../../addresses/address.service';

@Component({
  selector: 'app-pharmacy-edit',
  templateUrl: './pharmacy-edit.component.html',
    styleUrls: ['./pharmacy-edit.component.css']
})
export class PharmacyEditComponent implements OnInit {

    private routerLink: string = '../list';

    private pharmid: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    public addresses: FormArray;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pharmacyService: PharmacyService,
        private formBuilder: FormBuilder) { }

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
            this.initFormForSave(<Pharmacy>{});
        }

    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let pharmacy = this.formGroup.value as Pharmacy;

            if (this.isEdit) {
                pharmacy.id = this.pharmid;

                this.pharmacyService.update(pharmacy).subscribe(res => {
                    this.router.navigate(['/pharmacies']);
                });
            } else {

                this.pharmacyService.save(pharmacy).subscribe(res => {
                    this.router.navigate(['/pharmacies']);
                });
            }
        }
    }

    initForm(pharmacy: Pharmacy) {
        this.formGroup = this.formBuilder.group({
            name: [pharmacy.name, Validators.required],
            addresses: this.formBuilder.array(this.loadAddresses(pharmacy))
        });
        console.log(this.loadAddresses(pharmacy));
        console.log(this.formGroup);
    }

    loadAddresses(pharmacy: Pharmacy) {
        return pharmacy.addresses.map(p => this.formBuilder.group({
            description: p.description
        }));
    }

    initFormForSave(pharmacy: Pharmacy) {
        this.formGroup = this.formBuilder.group({
            name: ["", Validators.required],
            //addresses: this.formBuilder.array(this.addAddresses(pharmacy.addresses))
        });
    }

    addAddresses() {
        this.addresses.push(this.formBuilder.control(''));
    }


}
