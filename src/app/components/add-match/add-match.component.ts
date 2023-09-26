import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title: String = "ADD Match"
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title = "Edit Match"
      this.getMatchById();
    }
    console.log("here id match", this.id);
  }

  addEditMatch() {
    if (this.id) {
      this.matchService.editMatch(this.match).subscribe((response) => {
        console.log("Here response from BE after edit", response);
        this.router.navigate(["admin"]);
      });
    }
    else {
      // subscribe c'est une methode prédifinie pour récupére la reponse de service 
      this.matchService.addMatch(this.match).subscribe((response) => {
        console.log("Here response from BE after add", response);
        this.router.navigate(["admin"]);
      });
    }
  }


  getMatchById() {
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        // data: Response from BE (object)
        console.log("Here response from BE after get match ", data);
        this.match = data;

      }
    );
  }













  addMatchOld() {

    // console.log("**************",this.match);
    // localStorage.setItem("matches",JSON.stringify(this.match))

    let T = JSON.parse(localStorage.getItem("matches") || "[]")
    this.match.id = this.generateId(T);
    T.push(this.match)
    console.log("**************", T);
    localStorage.setItem("matches", JSON.stringify(T))
  }

  generateId(T: any) {
    let max = 0;
    if (T.length === 0) {
      return max;
    } else {
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;
        }
      }
      console.log("***** Here matches", T);
      return max; // Ajout de cette ligne pour retourner la valeur
    }
  }





  //   X :String ="Bonjour"
  //   path : String=""
  //   count :number
  //   addMatch(param:any){
  //     console.log("here into add match funch",param)
  //   }

  //  testChange (event:any){
  //     console.log("here change",event.target.value)
  //   }

  //   counter()
  //   {
  //     this.count = this.count +1
  //   }



}
