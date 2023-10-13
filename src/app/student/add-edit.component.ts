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

import { StudentService, AlertService, CourseService } from '@app/_services';
import { Status } from '@app/_helpers/enums/status';
import { Course } from '@app/_models';
import { Observable } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@Component({
    templateUrl: 'add-edit.component.html',
    styleUrls: ['students.component.css'],
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

    course!: Course[];
    filteredOptionsCur!: Observable<Course[]>;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private studentService: StudentService,
        private alertService: AlertService,
        private CourseService: CourseService

    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.form = this.formBuilder.group({
            student_id: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            full_name: ['', Validators.required],
            course: ['', Validators.required],
            year_level: ['', Validators.required],
            enrollment_date: ['', Validators.required],
            description: [''],
            status: [Status.ENABLED, Validators.required]
        });
        this.loadCourse();
        this.title = 'Add Student';
        if (this.id) {
            // edit mode
            this.title = 'Edit Student';
            this.loading = true;
            this.studentService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.form.get('course')?.patchValue(x.course);
                    this.form.patchValue(x);
                    this.loading = false;
                });

        }
        /** Course filter */
        this.filteredOptionsCur = this.form.get('course')!.valueChanges.pipe(
            startWith(''),
            map(value => {
                const name = typeof value === 'string' ? value : value?.name;
                return name ? this._listfilterCur(name as string) : this.course?.slice();
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
        this.saveStudent()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Student saved', true);
                    this.router.navigateByUrl('/students');
                },
                error: (error: string) => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            })
    }

    private saveStudent() {
        // create or update student based on id param
        return this.id
            ? this.studentService.update(this.id!, this.form.value)
            : this.studentService.create(this.form.value);
    }
    
    /** Course */
    loadCourse(){
        this.CourseService.getAllEnabled().subscribe(Course => {
            this.course = Course;
        })
    }

    private _listfilterCur(name: string): Course[] {
        const filterValue = name.toLowerCase();
        return this.course?.filter(option => option.name?.toUpperCase().includes(filterValue));
    }

    displayFnCur(Course: Course): string {
        return Course && Course.name ? Course.name : '';
    }
}