import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  const AUTH_API = 'https://animal-sitting.herokuapp.com/api/sitting/v1';
const AUTH_API = 'http://localhost:8080/api/sitting/v1';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SittingService {

  constructor(private http: HttpClient) { }

  submitSitting(body): Observable<any> {
    return this.http.post(`${AUTH_API}/test`, body, httpOptions);
  }

  getAllSittingsPaginatedByPostcode(pageNumber: number, postcode: number, beg: string, end: string): Observable<any> {
    return this.http.get(`${AUTH_API}/search?postcode=${postcode}&page=${pageNumber}&beg=${beg}&end=${end}`, httpOptions);
  }
}
