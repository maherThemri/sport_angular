import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add-match", component: AddMatchComponent },
  { path: "table-match", component: TableMatchComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "add-match/:id", component: AddMatchComponent },
  { path: "matches", component: MatchesComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "add-player", component: AddPlayerComponent },
  { path: "add-player/:id", component: AddPlayerComponent },
  { path: "add-team", component: AddTeamComponent },
  { path: "add-team/:id", component: AddTeamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
