import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string = "http://localhost:8082/api/players"
  constructor(private http: HttpClient) { }
  // reponse : string message
  addPlayer(obj: any) {
    return this.http.post(this.playerURL, obj);
  }
  // obj: nouvelles valeurs
  // reponse : string message
  editPlayer(obj: any) {
    return this.http.put(this.playerURL, obj);
  }
  // reponse : string message
  deletePlayer(id: any) {
    return this.http.delete(`${this.playerURL}/${id}`);
  }
  // reponse: tableau d'objets
  getAllPlayer() {
    return this.http.get(this.playerURL);
  }
  // reponse: un objet
  getPlayerById(id: any) {
    console.log(id);

    return this.http.get(`${this.playerURL}/${id}`);
  }
}
