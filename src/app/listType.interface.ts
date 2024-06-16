export interface Match {
  matchName: string;
  matchId: string;
  matchType: string;
  place: string;
  country: string;
  team1: {
    id: string;
    name: string;
    photo: string;
    totalScore: number;
    wicketsFallen: number;
    oversPlayed: number;
  };
  team2: {
    id: string;
    name: string;
    photo: string;
    totalScore: number;
    wicketsFallen: number;
    oversPlayed: number;
  };
}