import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false }) dtElement!: DataTableDirective;


  dtOptions: DataTables.Settings = {};

  teams?: any = [];
  constructor(
    private teamService: TeamService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.teamsDataTable();

  }
  teamsDataTable() {
    console.log("here into teams data table");

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      searching: true,
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'owner' },
        { data: 'foundation' }
      ],
      ajax: (dataTablesParameters: any, callback: any) => {
        const page = Math.floor(dataTablesParameters.start / dataTablesParameters.length);
        const size = dataTablesParameters.length;
        const sortBy = dataTablesParameters.order[0].dir;
        let searchTerm = dataTablesParameters.search.value;
        // console.log("here into get all");

        this.teamService.getAllTeams(page, size, sortBy, searchTerm).subscribe(
          (data) => {

            this.teams = data.content;
            callback({
              recordsTotal: data.totalElements,
              recordsFiltered: data.totalElements,
              data: [],
            });
          });
      },
    };
  }



  deleteTeam(id: any) {
    this.teamService.deleteTeam(id).subscribe((data) => {
      console.log("Here response delete from BE", data);
      this.toastr.success("Opération réussie");
      // Reload DataTable data without full reload
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
      });
      //this.teamsDataTable();

    });

  }
  navigateTo(id: any) {
    this.router.navigate([`add-team/${id}`]);
  }


}
