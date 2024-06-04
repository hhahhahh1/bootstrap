import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpBackend,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDetails } from "../models/response/userDetails.model";
import { AnimalWithUserId } from "../models/animal.model";
  const USER_API = "http://localhost:8080/api/v1/user";
// const USER_API = 'https://animal-sitting.herokuapp.com/api/v1/user';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpWithoutInterceptor: HttpClient;

  constructor(private http: HttpClient, private httpBackend: HttpBackend) {
    this.httpWithoutInterceptor = new HttpClient(httpBackend);
  }

  //  addAnimalToUser(body: AnimalWithUserId): Observable<HttpEvent<{}>> {
  //   // let formatData: FormData = new FormData();
  //   const url = `${USER_API}/my-animals/add`;
  //   // formatData.append('file', file);
  //   const req = new HttpRequest('POST', url , body, {
  //     reportProgress: true,
  //     responseType: 'text'
  //   });
  //   return this.http.request(req);

  // }

  updateUser(body): Observable<UserDetails> {
    const url = `${USER_API}`;
    return this.http.put<UserDetails>(url, body);
  }

  checkIfUserHasAnimals(id) {
    const url = `${USER_API}/check-user-animals/${id}`;
    return this.http.get(url);
  }

  addAnimalToUser(body) {
    const url = `${USER_API}/my-animals/add`;
    return this.http.post(url, body, httpOptions);
  }

  getUsersAnimals(userId: string) {
    const url = `${USER_API}/my-animals/${userId}`;
    return this.http.get(url);
  }

  getUserDetails(userId): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${USER_API}/${userId}`);
  }

  autocomplete(adress: string, city: string) {
    const url = `http://api.positionstack.com/v1/forward?access_key=aac75ecebc69346fcfa68a5bbf5394d2&query=${adress}&region=${city}&country=FR&limit=5&output=json`;
    return this.httpWithoutInterceptor.get(url);
  }
}
