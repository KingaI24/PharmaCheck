import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    private routerLink: string = '../list';

    private prodid: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    public urlpattern = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

    public formulations = [
        { value: 0, name: "tablet" },
        { value: 1, name: "capsule" },
        { value: 2, name: "suppository" },
        { value: 3, name: "suspension" },
        { value: 4, name: "solution" },
        { value: 5, name: "injectable" },
        { value: 6, name: "perfuzable" },
        { value: 7, name: "IUD" },
    ];

    public onPrescriptions = [
        { value: false, name: "no" },
        { value: true, name: "yes" },
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.prodid = parseInt(this.route.snapshot.params['id']);

        if (this.prodid) {
            this.routerLink = '../../list';

            this.productService.getProduct(this.prodid).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<Product>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let product = this.formGroup.value as Product;

            if (this.isEdit) {
                product.id = this.prodid;

                this.productService.update(product).subscribe(res => {
                    this.router.navigate(['/products']);
                });
            } else {

                this.productService.save(product).subscribe(res => {
                    this.router.navigate(['/products']);
                });
            }
        }
    }

    initForm(product: Product) {
        this.formGroup = this.formBuilder.group({
            name: [product.name, Validators.required],
            activeSubstance: [product.activeSubstance, Validators.required],
            dosage: [product.dosage, Validators.required],
            formulation: [product.formulation, [Validators.required]],
            onPrescription: [product.onPrescription, [Validators.required]],
            rcp: [product.rcp, [Validators.required, Validators.pattern(this.urlpattern)]],
        });
    }


}
