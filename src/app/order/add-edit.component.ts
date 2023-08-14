import { Component, OnInit,  } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';

import { AlertService } from '@app/_components/alert/alert.service';
import { Observable } from 'rxjs';
import { Order } from '@app/_models/order';
import { OrderService } from '@app/_services/order.service';
import { OrderDetail } from '@app/_models/order-detail';
import { PaymentType } from '@app/_models/payment-type';

@Component({ 
    selector: 'order-add-edit-component',
    templateUrl: 'add-edit.component.html',
    styleUrls: ['orders.component.css'],
    standalone: true,
    imports: [
        NgIf, ReactiveFormsModule, NgClass, CommonModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        MatSelectModule, MatAutocompleteModule, MatTableModule
    ]
})
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;
    totalAmount!: number;

    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    filteredOptions!: Observable<Order[]>;

    orderDetails!:OrderDetail[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'product', 'qty', 'price', 'total', 'action'];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrderService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.form = this.formBuilder.group({
            or_number: [''],
            ordered_to: ['', Validators.required],
            address: ['', Validators.required],
            business_name: ['', Validators.required],
            description: [''],
            payment_type: [PaymentType.CASH, Validators.required]
            // status: [Status.ENABLED, Validators.required]
        });

        this.title = 'Add Order';
        if (this.id) {
            // edit mode
            this.title = 'Edit Order';
            this.loading = true;
            this.orderService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.orderDetails = x.details;
                    this.dataSource = new MatTableDataSource<OrderDetail>(this.orderDetails);
                    this.totalAmount = x.total_amount ? x.total_amount : 0;
                    this.form.patchValue(x);
                    this.loading = false;
                });
        }

        // this.loadOrders();

        // this.filteredOptions = this.form.get('or_number')!.valueChanges.pipe(
        //     startWith(''),
        //     map(value => this._listfilter(value || '')),
        // );
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        
        this.submitting = true;
        this.saveOrder()
            .pipe(first())
            .subscribe({
                next: ( o: Order) => {
                    this.alertService.success('Order saved', this.options);
                    if(this.id) this.submitting = false;
                    this.router.navigateByUrl('/orders/edit/'+o.id);
                },
                error: (error: string) => {
                    this.alertService.error(error, this.options);
                    this.submitting = false;
                }
            })
    }

    private saveOrder() {
        // create or update order based on id param
        return this.id
            ? this.orderService.update(this.id!, this.form.value)
            : this.orderService.create(this.form.value);
    }

    addDetail() {
        this.router.navigateByUrl('/orders/add-detail/'+this.id);
    }

    editDetail(detailId: any) {
        this.router.navigateByUrl('/orders/edit-detail/'+detailId);
    }

    deleteDetail(detailId: any) {
        this.deleteOrderDetail(detailId)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Order detail deleted', this.options);
                    this.router.navigateByUrl('/orders/edit/'+this.id).then(()=>{
                        window.location.reload();
                    });
                },
                error: (error: string) => {
                    this.alertService.error(error, this.options);
                }
            })
    }
 
    private deleteOrderDetail(detailId: any){
        return this.orderService.deleteDetail(detailId);
    }

    // loadOrders(){
    //     this.orderService.getAll().subscribe(products => {
    //         this.products = products;
    //     })
    // }

    // private _listfilter(product: Product): Product[] {
    //     const filterValue = product && product.name ? product?.name?.toLowerCase() : '';
    //     return this.products?.filter(option => option.name?.toLowerCase().includes(filterValue));
    // }

    // displayFn(product: Product): string {
    //     return product && product.name ? product.name : '';
    // }

}