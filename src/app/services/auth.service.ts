import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpDto } from '../models/auth.model';

const AUTH_API = 'http://localhost:8080/api/v1/auth/';
//const AUTH_API = 'https://animal-sitting.herokuapp.com/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials, httpOptions);
  }

  register(user): Observable<SignUpDto> {
    return this.http.post<SignUpDto>(AUTH_API + 'signup', user, httpOptions);
  }
}
