import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchScoreService } from '../fetch-score.service';
import { scoreType } from '../score.interface';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {

  matchId! :string;
  scoreDetails! : scoreType;

  constructor(
  private route: ActivatedRoute,
  private fetchScoreService : FetchScoreService
  ){}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.matchId = params['matchId']; 
      this.scoreDetails = this.fetchScoreService.score(this.matchId);
    });
  }

  getBallColor(run: string): string {
    switch (run) {
      case '1':
        return '#FFB3BA'; 
      case '2':
        return '#FFDFBA';
      case '3':
        return '#FFFFBA'; 
      case '4':
        return '#BAFFC9'; 
      case '6':
        return '#9AFFDD'; 
      case 'W':
        return '#BDBDBD'; 
      case '*':
        return '#D0A3FF'; 
      default:
        return '#F5F5F5'; 
    }
  }
}
