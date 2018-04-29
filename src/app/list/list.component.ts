import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Auth, FantasyPlayers } from '../types';

import { AUTH_TOKEN, FANTASY_TEAM_ID } from './list.constant';
import { FantasyTeamService } from '../fantasy-team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  auth: Observable<Auth>;
  fantasyTeamName: String;
  fantasyPlayers: Array<any>;
  loading: boolean;

  constructor(private fantasyTeamService: FantasyTeamService) { }

  ngOnInit() {
    this.getFantasyTeam();
  }

  private getFantasyTeam() {
    this.loading = true;
    this.auth = this.fantasyTeamService.getFantasyTeam(AUTH_TOKEN, FANTASY_TEAM_ID);

    this.auth
      .subscribe(
        ({fantasyTeam}: Auth) => {
          this.fantasyTeamName = fantasyTeam.name;
          this.fantasyPlayers = fantasyTeam.fantasyPlayers;
          this.loading = false;
        },
        (err) =>  {
          this.loading = false;
          throw err;
        }
    );
  }
}
