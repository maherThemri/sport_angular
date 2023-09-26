import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herro',
  templateUrl: './herro.component.html',
  styleUrls: ['./herro.component.css']
})
export class HerroComponent implements OnInit {

  title:string ="Bariza"
  currentDate= Date.now()
  constructor() { }

  ngOnInit() {
  }

}
