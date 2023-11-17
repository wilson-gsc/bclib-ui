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

import { Book } from '@app/_models';
import { BookService } from '@app/_services/book.service';
import { TableUtil } from '@app/_helpers/table.util';

@Component({ 
    selector: 'book-list-component',
    templateUrl: 'list.component.html',
    styleUrls: ['books.component.css'],
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule,
        MatIconModule
    ]
})
export class ListComponent implements OnInit {

    books?: Book[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'category', 'title', 'author', 'publisher', 'book_status', 'action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.getBooks();
    }

    getBooks() {
        this.bookService.getAll()
            .pipe(first())
            .subscribe(books => {
                this.books = books;
                this.dataSource = new MatTableDataSource<Book>(this.books);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    exportTable() {
        TableUtil.exportTableToExcel("books", "Books");
    }
}