import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CD } from './cd.model';

@Injectable({
  providedIn: 'root'
})
export class CdMusicService {

  private apiUrl = 'http://localhost:3000/api/cds'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getAllCDs(): Observable<CD[]> {
    return this.http.get<CD[]>(this.apiUrl);
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>(`${this.apiUrl}/${id}`);
  }
}
