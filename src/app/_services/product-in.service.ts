import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { ProductIn } from '@app/_models/product-in';

@Injectable({ providedIn: 'root' })
export class ProductInService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll(filterDate: any) {
        return this.http.get<ProductIn[]>(`${environment.apiUrl}/product-in/${filterDate}`);
    }

    create(productIn: ProductIn) {
        return this.http.post(`${environment.apiUrl}/product-in`, productIn);
    }

    getById(id: string) {
        return this.http.get<ProductIn>(`${environment.apiUrl}/product-in/edit/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/product-in/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}