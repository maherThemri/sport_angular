import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  @ViewChild('addplayerForm') addplayerForm!: NgForm;
  //addplayerForm!: FormGroup;
  player: any = {};
  title: string = "Add player";
  id!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Player"
      this.getPlayerById()
    }
    console.log("here id match", this.id);
  }
  addEditPlayer() {
    console.log("here obj player", this.player);
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe((data) => {
        this.toastr.success("Opération réussie");
        console.log("Here response from BE with update player", data);

      });
    } else {
      this.playerService.addPlayer(this.player).subscribe((data) => {
        console.log("here response from BE ", data);
        this.toastr.success("Opération réussie");

        this.addplayerForm.resetForm();

      });
    }

  }
  getPlayerById() {
    this.playerService.getPlayerById(this.id).subscribe((data) => {
      console.log("here response from BE", data);

      this.player = data;
    });
  }

  // showSuccess() {
  //   this.toastr.success('Opération réussie');
  // }

  // showError() {
  //   this.toastr.error('Opération a échoué');
  // }

}
