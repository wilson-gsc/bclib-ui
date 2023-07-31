import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
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

import { TableUtil } from '@app/_helpers/table.util';
import { ProductInventory } from '@app/_models/product-inventory';
import { ProductInventoryService } from '@app/_services/product-inventory.service';

@Component({ 
    selector: 'product-inventory-list-component',
    templateUrl: 'list.component.html',
    styleUrls: ['product-inventories.component.css'],
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf, CommonModule,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule
    ]
})
export class ListComponent implements OnInit {

    productInventories?: ProductInventory[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'transaction_date', 'product', 'balance_begin', 'product_in', 'total', 'product_out', 'balance_end', 'action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    constructor(private productInventoryService: ProductInventoryService) {}

    ngOnInit() {
        this.getAll();
        
    }

    getAll() {
        this.productInventoryService.getAll()
            .pipe(first())
            .subscribe(productInventories => {
                this.productInventories = productInventories;
                this.dataSource = new MatTableDataSource<ProductInventory>(this.productInventories);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
                this.dataSource.filterPredicate = (data: ProductInventory, filter: string) => {
                    return data.product?.name?.toLocaleLowerCase().includes(filter);
                }
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    exportTable() {
        TableUtil.exportTableToExcel("productInventories", "Product Inventories");
    }
}