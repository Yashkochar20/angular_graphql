export type FantasyTeam = {
    name: string;
    fantasyPlayers: [FantasyPlayers];
};

export type FantasyPlayers = {
    isStarting: boolean;
    eligiblePositions: Array<string>;
    realPlayer: RealPlayer;
};

export type RealPlayer = {
    fullName: string;
    imageUrl: string;
};

export type Auth = {
    fantasyTeam: FantasyTeam;
};

export type Query = {
  auth: Auth;
};
