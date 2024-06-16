import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchScoreService {

  constructor() { }
  score(matchId:string) : any {
    //api call get with parammeter match id to fetch current live score
   const scoreD = {
      matchId: "001",
      isLive: true,
      notification: 'J.Bumarah to Barry Burns : 4 runs',
      team1: {
          id: "team001",
          name: "India",
          photo: "india_flag.jpg",
          totalScore: 320,
          wicketsFallen: 7,
          oversPlayed: 90,
          isPlaying:false,
      },
      team2: {
          id: "team002",
          name: "England",
          photo: "england_flag.jpg",
          totalScore: 280,
          wicketsFallen: 4,
          oversPlayed: 88,
          isPlaying:true,
      },
      batsman1: {
          name: "Virat Kohli",
          ballsPlayed: 55,
          runsScored: 45,
          isOut: false
      },
      batsman2: {
          name: "Rohit Sharma",
          ballsPlayed: 42,
          runsScored: 30,
          isOut: false
      },
      overs: {
          currentOver: "15.2",
          totalOvers: 50,
          runsOnLastBall: 1
      },
      currentOver:['1','0','W','LB 1','6','notPlayed'],
      currentRunRate: 6.2 // Example value, replace with actual current run rate
                    };

    return scoreD;
  }

}
