import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { first } from 'rxjs/operators';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';

import { TableUtil } from '@app/_helpers/table.util';
import { ProductInventory } from '@app/_models/product-inventory';
import { ProductInventoryService } from '@app/_services/product-inventory.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@Component({ 
    selector: 'product-inventory-list-component',
    templateUrl: 'list.component.html',
    styleUrls: ['product-inventories.component.css'],
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf, CommonModule, ReactiveFormsModule,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule, MatDatepickerModule, MatNativeDateModule
    ],
    providers: [DatePipe]
})
export class ListComponent implements OnInit {

    productInventories?: ProductInventory[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'transaction_date', 'product', 'balance_begin', 'product_in', 'total', 'product_out', 'balance_end', 'action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    filterDate = new FormControl(new Date());

    constructor(
        private productInventoryService: ProductInventoryService,
        public datePipe: DatePipe
    ) {}

    ngOnInit() {
        this.getAll(new Date());
    }

    getAll(filterDate: any) {
        this.productInventoryService.getAll(filterDate)
            .pipe(first())
            .subscribe(productInventories => {
                this.productInventories = productInventories;
                this.dataSource = new MatTableDataSource<ProductInventory>(this.productInventories);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
                this.dataSource.filterPredicate = (data: any, filter: string) => {
                    const dataDate = new Date(data.transaction_date);
                    const filterDate = new Date(filter);
                    
                    return data.product?.name?.toLocaleLowerCase().includes(filter) ||
                    (
                        dataDate.getFullYear() === filterDate.getFullYear() &&
                        dataDate.getMonth() === filterDate.getMonth() &&
                        dataDate.getDate() === filterDate.getDate()
                    );
                }
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    exportTable() {
        TableUtil.exportTableToExcel("product-inventories", "Product Inventories");
    }

    onDateChange(event: any) {
        const selectedDate = event.value;
        console.log(this.datePipe.transform(selectedDate, 'MM/dd/yyyy'));
        this.getAll(new Date(selectedDate))
        this.dataSource.filter = this.datePipe.transform(selectedDate, 'yyyy-MM-dd HH:mm:ss');
    }
    

}