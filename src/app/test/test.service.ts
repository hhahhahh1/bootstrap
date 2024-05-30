import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { OffsetDateDTO } from '../models/date.model';
import { DisponibilityDTO } from '../models/disponibilityDTO.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  // testOffset(body: DisponibilityDTO) {
  //   return this.http.post('https://animal-sitting.herokuapp.com/api/sitting/v1', body).subscribe();
  // }
  testOffset(body: DisponibilityDTO) {
    return this.http.post('http://localhost:8080/api/sitting/v1', body).subscribe();
  }
}
