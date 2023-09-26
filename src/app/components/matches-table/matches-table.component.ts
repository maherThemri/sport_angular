import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = []
  constructor(
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.getAllMatches()
  }

  getAllMatches() {
    this.matchService.getAllMatch().subscribe((data) => {
      console.log("Here response from BE ", data);
      this.matches = data;
    });
  }

  // deleteMatch(id: any) {
  //   this.matchService.deleteMatch(id).subscribe((data) => {
  //     console.log("Here response from BE", data);

  //     this.getAllMatches();
  //   });
  // }
  deleteMatch(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce match ?',
      text: 'Cette action est irréversible !',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur a confirmé la suppression, alors supprimez le match
        this.matchService.deleteMatch(id).subscribe((data) => {
          console.log("Here response from BE", data);
          // Vous pouvez également afficher une notification de succès ici si vous le souhaitez
          this.getAllMatches();
        });
      }
    });
  }


  navigateTo(id: any) {
    this.router.navigate(["add-match/", id])
  }

}
