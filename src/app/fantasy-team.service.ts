import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';
import { Query, FantasyTeam } from './types';

@Injectable()
export class FantasyTeamService {

  constructor(private apollo: Apollo) { }

  getFantasyTeam(token: string, id: UUID) {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query auth($token: String, $id: UUID!) {
          auth(token: $token) {
            fantasyTeam (id: $id) {
              name
              fantasyPlayers {
                isStarting
                eligiblePositions
                realPlayer {
                  fullName
                  imageUrl
                }
              }
            }
          }
        }
      `,
      variables: {
        token: token,
        id: id
      }
    })
      .valueChanges
      .pipe(
        map(result => result.data.auth)
      );
  }
}
