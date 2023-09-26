import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent implements OnInit {
  matches: any = []
  constructor(
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.getAllMatches()
  }

  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]")

    // console.log("++++++++++++++++", this.matches)
    this.matchService.getAllMatch().subscribe();
  }

  deleteMatch(id: any) {
    // console.log("++++ ", id)
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id === id) { this.matches.splice(i, 1) }

    // }
    // localStorage.setItem("matches", JSON.stringify(this.matches))
    this.matchService.deleteMatch(id).subscribe();
  }

  navigateTo(id: any) { this.router.navigate(["add-match/", id]) }

}
