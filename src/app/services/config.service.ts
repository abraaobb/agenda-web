import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get('http://localhost:8000/api/contact/');
    }
}
