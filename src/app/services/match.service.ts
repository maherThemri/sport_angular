import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchUrl : BE server adress
  matchURL: string = "http://localhost:8082/api/matches"
  constructor(private http: HttpClient) { }
  // Array of objects
  getAllMatch() {
    return this.http.get(this.matchURL);
  }
  // Object
  getMatchById(id: number) {
    return this.http.get(`${this.matchURL}/${id}`)
  }
  // Json object {id:.., scoreOne:..., scoreTwo:...}
  addMatch(matchObj: any) {
    return this.http.post(this.matchURL, matchObj);
  }
  // Json object (edited match)
  editMatch(obj: any) {
    return this.http.put(this.matchURL, obj);
  }
  // reponse : string message/boolean
  deleteMatch(id: any) {
    return this.http.delete(`${this.matchURL}/${id}`);
  }
}
