import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Film[]> {
    return this.httpClient.get<Film[]>("http://localhost:3000/films")
  }

  getId(id: number) {
    return this.httpClient.get<Film>("http://localhost:3000/films/" +id)
  }
  
  updatePlaces(places : number) {
    return this.httpClient.put<Film>("http://localhost:3000/films/", places)
  }
  create(film: Film): Observable<Film> {
    return this.httpClient.post<Film>("http://localhost:3000/films/", film)
  }

  update(film: Film): Observable<Film> {
    return this.httpClient.put<Film>("http://localhost:3000/films/", film)
  }

  delete(id: string) {
    return this.httpClient.delete<Film>("http://localhost:3000/films/" +id)
  }
}
