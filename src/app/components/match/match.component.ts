import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match: any = {}
  @Output() passId = new EventEmitter<any>()
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  deleteMatch(id: any) {
    console.log("here into child ", id)
    this.passId.emit(id)
    this.matchService.deleteMatch(id).subscribe((data) => {
      console.log("match delete with success", data);

    });

  }

  compare(a: any, b: any) {
    if (Number(a) > Number(b))
      return ["Win", "green"]
    else if (Number(a) < Number(b))
      return ["Loss", "blue"]
    else return ["Draw", "yellow"]
  }



}
