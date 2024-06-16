export interface scoreType {
    matchId: string;
    isLive: boolean;
    notification: string;
    team1: {
      id: string;
      name: string;
      photo: string;
      totalScore: number;
      wicketsFallen: number;
      oversPlayed: number;
      isPlaying: boolean;
    };
    team2: {
      id: string;
      name: string;
      photo: string;
      totalScore: number;
      wicketsFallen: number;
      oversPlayed: number;
      isPlaying: boolean;
    };
    batsman1: {
      name: string;
      ballsPlayed: number;
      runsScored: number;
      isOut: boolean;
    };
    batsman2: {
      name: string;
      ballsPlayed: number;
      runsScored: number;
      isOut: boolean;
    };
    overs: {
      currentOver: string;
      totalOvers: number;
      runsOnLastBall: number;
    };
    currentOver: (string | 'notPlayed')[];
    currentRunRate: number;
  }