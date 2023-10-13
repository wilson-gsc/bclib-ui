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

import { Student, borrow_record } from '@app/_models';
import { borrow_recordService } from '@app/_services/borrow_record.service';
import { TableUtil } from '@app/_helpers/table.util';

@Component({ 
    selector: 'borrow_record-list-component',
    templateUrl: 'list.component.html',
    styleUrls: ['borrow_record.component.css'],
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule
    ]
})
export class ListComponent implements OnInit {

    borrow_record?: Student[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'student', 'employee', 'book', 'date_borrowed', 'date_returned', 'book_status', 'return_status','action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    constructor(private borrow_recordService: borrow_recordService) {}

    ngOnInit() {
        this.getBorrowRecord();
    }

    getBorrowRecord() {
        this.borrow_recordService.getAll()
            .pipe(first())
            .subscribe(borrow_record => {
                this.borrow_record = borrow_record;
                this.dataSource = new MatTableDataSource<borrow_record>(this.borrow_record);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    exportTable() {
        TableUtil.exportTableToExcel("borrow_record", "BorrowRecord");
    }
}//