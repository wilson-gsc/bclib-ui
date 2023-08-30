import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Bank } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class BankService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Bank[]>(`${environment.apiUrl}/banks`);
    }

    getAllEnabled() {
        return this.http.get<Bank[]>(`${environment.apiUrl}/banks/enabled`);
    }

    create(bank: Bank) {
        return this.http.post(`${environment.apiUrl}/banks`, bank);
    }

    getById(id: string) {
        return this.http.get<Bank>(`${environment.apiUrl}/banks/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/banks/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}