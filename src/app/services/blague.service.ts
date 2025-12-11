import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Blague {
  id: number;
  question: string;
  reponse: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlagueService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRandom(): Observable<Blague> {
    return this.http.get<Blague>(`${this.apiUrl}/random`);
  }

  getById(id: number): Observable<Blague> {
    return this.http.get<Blague>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Blague[]> {
    return this.http.get<Blague[]>(this.apiUrl);
  }

  addBlague(blague: any): Observable<Blague> {
    return this.http.post<Blague>(this.apiUrl, blague);
  }
}
