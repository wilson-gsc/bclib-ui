import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Item } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ItemService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Item[]>(`${environment.apiUrl}/items`);
    }

    create(item: Item) {
        return this.http.post(`${environment.apiUrl}/items`, item);
    }

    getById(id: string) {
        return this.http.get<Item>(`${environment.apiUrl}/items/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/items/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}