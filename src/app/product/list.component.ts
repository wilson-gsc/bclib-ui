import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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

import { Product } from '@app/_models';
import { ProductService } from '@app/_services/product.service';
import { TableUtil } from '@app/_helpers/table.util';

@Component({ 
    templateUrl: 'list.component.html',
    styleUrls: ['products.component.css'],
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule
    ]
})
export class ListComponent implements OnInit {

    products?: Product[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'name', 'description', 'uom', 'status', 'action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getAll()
            .pipe(first())
            .subscribe(products => {
                this.products = products;
                this.dataSource = new MatTableDataSource<Product>(this.products);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    exportTable() {
        TableUtil.exportTableToExcel("products", "Products");
    }
}