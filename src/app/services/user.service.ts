import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:8082/api/auth";

  constructor(private httpClient: HttpClient) { }

  signup(user: any) {
    return this.httpClient.post(this.userURL + "/register", user);
  }
  login(user: any) {
    return this.httpClient.post<{ accessToken: any }>(this.userURL + "/login", user);
  }

  getUserById(id: any) {
    return this.httpClient.get(`${this.userURL}/profile/${id}`);
  }
  editUser(obj: any) {
    return this.httpClient.put(`${this.userURL}/editProfile`, obj);
  }
}
