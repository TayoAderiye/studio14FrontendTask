import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  addToMovieList(data: any) {
    return this.http.post(`${environment.baseUrl}/movies/addMovieList`, data, {
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    });
  }

  getUserMovieList() {
    return this.http.get(`${environment.baseUrl}/movies/getUserMovieList`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    });
  }

  getAllMovies() {
    return this.http.get(`${environment.baseUrl}/movies/getAll`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    });
  }

  deleteFromUserList(id: any) {
    return this.http.delete(`${environment.baseUrl}/movies/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    });
  }
}
