import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm!: FormGroup;
  team: any = {};
  title: string = "Add Team";
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Team";
      this.getTeamById();
    }
  }
  addEditTeam() {
    if (this.id) {
      this.teamService.editTeam(this.team).subscribe((data) => {
        console.log("Here response update From BE", data);
        this.toastr.success("Opération réussie");

      });
    } else {
      console.log(this.team);

      this.teamService.addTeam(this.team).subscribe((data) => {
        console.log("here response ajout from BE for team ");
        this.toastr.success("Opération réussie");

      });
    }

  }
  getTeamById() {
    this.teamService.getTeamById(this.id).subscribe((data) => {
      console.log("Here response getById from BE", data);
      this.team = data;

    });
  }

}
