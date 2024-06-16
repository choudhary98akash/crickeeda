import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'score/:matchId',component:ScoreBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
