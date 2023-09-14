import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Product } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    getAllEnabled() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products/enabled`);
    }

    getAllEnabledQty() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products/enabled-qty`);
    }

    create(product: Product) {
        return this.http.post(`${environment.apiUrl}/products`, product);
    }

    getById(id: string) {
        return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/products/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete<Product>(`${environment.apiUrl}/products/delete/${id}`);
    }
}