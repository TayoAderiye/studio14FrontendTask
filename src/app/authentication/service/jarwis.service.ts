import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JarwisService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${environment.baseUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.baseUrl}/auth/register`, data);
  }
}
