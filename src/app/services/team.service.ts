import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL: string = "http://localhost:8082/api/teams";
  constructor(private http: HttpClient) { }
  // getAllTeams() {
  //   return this.http.get(this.teamURL);
  // }
  getAllTeams(
    page: number,
    size: number,
    sortBy: string,
    searchTerm: string
  ) {
    // Paramètres de requête pour la pagination
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sortBy)
      .set('searchTerm', searchTerm);

    return this.http.get<any>(this.teamURL, { params });
  }
  getTeamById(id: any) {
    return this.http.get(`${this.teamURL}/${id}`);
  }
  addTeam(obj: any) {
    return this.http.post(this.teamURL, obj);

  }
  editTeam(obj: any) {
    return this.http.put(this.teamURL, obj);
  }
  deleteTeam(id: any) {
    return this.http.delete(`${this.teamURL}/${id}`);
  }
}
