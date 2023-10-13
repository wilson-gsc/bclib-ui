import { Component, OnInit } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { first, map, startWith } from 'rxjs/operators';

import { StudentService, AlertService, EmployeeService, BookService, borrow_recordService} from '@app/_services';
import { BookStatus, ReturnStatus, Status, borrower_type } from '@app/_helpers/enums/status';
import { Book, Course, Employee, Student, } from '@app/_models';
import { Observable } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
    templateUrl: 'add-edit.component.html',
    styleUrls: ['borrow_record.component.css'],
    standalone: true,
    imports: [
        NgIf, ReactiveFormsModule, NgClass, CommonModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        MatSelectModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule
    ]
})
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;

    student!: Student[];
    filteredOptionsStu!: Observable<Student[]>;

    employee!: Employee[];
    filteredOptionsEmp!: Observable<Employee[]>;

    book!: Book[];
    filteredOptionsBook!: Observable<Book[]>;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private borrow_recordService: borrow_recordService,
        private studentService: StudentService,
        private alertService: AlertService,
        private EmployeeService: EmployeeService,
        private BookService: BookService,

    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.form = this.formBuilder.group({
            borrower_type: [borrower_type.STUDENT, Validators.required],
            student: ['', Validators.required],
            emplouyee: ['', Validators.required],
            book: ['', Validators.required],
            date_borrowed: ['', Validators.required],
            date_returned: ['', Validators.required],
            remaks: [''],
            book_status: [BookStatus.CHECKEDOUT, Validators.required],
            return_status: [ReturnStatus.GOOD, Validators.required],
           
        });
        this.loadStudent();
        this.loademployee();
        this.loadBook();
        this.title = 'Add borrow record';
        if (this.id) {
            // edit mode
            this.title = ' Edit borrow record';
            this.loading = true;
            this.borrow_recordService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.form.get('student')?.patchValue(x.student);
                    this.form.get('employee')?.patchValue(x.employee);
                    this.form.get('book')?.patchValue(x.book);
                    this.form.patchValue(x);
                    this.loading = false;
                });

        }
        /** student filter */
        this.filteredOptionsStu = this.form.get('student')!.valueChanges.pipe(
            startWith(''),
            map(value => {
                const full_name = typeof value === 'string' ? value : value?.full_name;
                return full_name ? this._listfilterStu(full_name as string) : this.student?.slice();
            }),
        );

         /** employee filter */
         this.filteredOptionsEmp = this.form.get('employee')!.valueChanges.pipe(
            startWith(''),
            map(value => {
                const full_name = typeof value === 'string' ? value : value?.full_name;
                return full_name ? this._listfilterEmp(full_name as string) : this.employee?.slice();
            }),
        );

         /** employee filter */
         this.filteredOptionsBook = this.form.get('book')!.valueChanges.pipe(
            startWith(''),
            map(value => {
                const title = typeof value === 'string' ? value : value?.title;
                return title ? this._listfilterBook(title as string) : this.book?.slice();
            }),
        );



    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // /stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;
        this.saveborrow_record()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Borrow record saved', true);
                    this.router.navigateByUrl('/borrow_record');
                },
                error: (error: string) => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            })
    }

    private saveborrow_record() {
        // create or update student based on id param
        return this.id
            ? this.borrow_recordService.update(this.id!, this.form.value)
            : this.borrow_recordService.create(this.form.value);
    }
    
    /** student */
    loadStudent(){
        this.studentService.getAllEnabled().subscribe(Student => {
            this.student = Student;
        })
    }

    private _listfilterStu(full_name: string): Student[] {
        const filterValue = full_name.toLowerCase();
        return this.student?.filter(option => option.full_name?.toUpperCase().includes(filterValue));
    }

    displayFnStu(Student: Student): string {
        return Student && Student.full_name ? Student.full_name : '';
    }


    /* Employee */
    loademployee(){
        this.EmployeeService.getAllEnabled().subscribe(Employee => {
            this.employee = Employee;
        })
    }

    private _listfilterEmp(full_name: string): Employee[] {
        const filterValue = full_name.toLowerCase();
        return this.employee?.filter(option => option.full_name?.toUpperCase().includes(filterValue));
    }

    displayFnEmp(Employee: Employee): string {
        return Employee && Employee.full_name ? Employee.full_name : '';
    }

    /* Book */
    loadBook(){
        this.BookService.getAllEnabled().subscribe(Book => {
            this.book = Book;
        })
    }

    private _listfilterBook(title: string): Employee[] {
        const filterValue = title.toLowerCase();
        return this.book?.filter(option => option.title?.toUpperCase().includes(filterValue));
    }

    displayFnBook(Book: Book): string {
        return Book && Book.title ? Book.title : '';
    }
}