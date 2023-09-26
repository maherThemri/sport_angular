import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { HerroComponent } from './components/herro/herro.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ColorDirective } from './directives/color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { InterceptorService } from './services/interceptor-service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NextMatchComponent,
    NewsComponent,
    VideosComponent,
    OurBlogComponent,
    HerroComponent,
    AddMatchComponent,
    TableMatchComponent,
    SignUpComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ColorDirective,
    ReversePipe,
    AdminComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    AddPlayerComponent,
    AddTeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     //TDF
    ReactiveFormsModule,  //Reactive Module
    HttpClientModule,
    BrowserAnimationsModule, // Ajoutez BrowserAnimationsModule
    ToastrModule.forRoot({
      timeOut: 3000, // Durée d'affichage des messages en millisecondes (3 secondes dans cet exemple)
      positionClass: 'toast-top-right', // Position des messages
      preventDuplicates: true, // Empêcher l'affichage de messages en double
    }),
    DataTablesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
