import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get(environment.apiUrl);
    }
    create(contact: Contact): Observable<any> {
        return this.http.post(environment.apiUrl, contact);
    }
    edit(id: string | number, contact: Contact) {
        return this.http.put(`${environment.apiUrl}${id}/`, contact);
    }
    delete(id: string | number) {
        return this.http.delete(`${environment.apiUrl}${id}/`);
    }
}
