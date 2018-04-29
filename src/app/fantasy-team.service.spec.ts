import { TestBed, inject } from '@angular/core/testing';

import { FantasyTeamService } from './fantasy-team.service';

describe('FantasyTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FantasyTeamService]
    });
  });

  it('should be created', inject([FantasyTeamService], (service: FantasyTeamService) => {
    expect(service).toBeTruthy();
  }));
});
