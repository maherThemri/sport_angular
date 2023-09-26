import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = []

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.getAllMatches()
  }

  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]")

    // console.log("++++++++++++++++", this.matches)
    this.matchService.getAllMatch().subscribe((data) => {
      this.matches = data;
    });
  }

  parentDeleteMatch(id: any) {
    console.log("here into Parent ", id)
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        this.matches.splice(i, 1)
      }

    }
    localStorage.setItem("matches", JSON.stringify(this.matches))

  }

}
