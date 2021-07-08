import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Serie[]> {
    return this.httpClient.get<Serie[]>("http://localhost:3000/serie")
  }

  getId(id: number) {
    return this.httpClient.get<Serie>("http://localhost:3000/serie/" +id)
  }
  
}
