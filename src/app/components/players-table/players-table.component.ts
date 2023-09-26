import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from 'src/app/services/player.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any = [];

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }
  getAllPlayers() {
    this.playerService.getAllPlayer().subscribe(
      (data) => {
        this.players = data;
      }
    );
  }
  deletePlayer(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce match ?',
      text: 'Cette action est irréversible !',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.playerService.deletePlayer(id).subscribe((data) => {
          this.getAllPlayers();
          this.toastr.success("Opération réussie");
        });
      }
    });


  }
  navigateTo(id: any) {
    this.router.navigate(["add-player/", id])
  }

}
