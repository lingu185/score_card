import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main.component';
import { CommonComponent } from './common.component';
import { ScorecardComponent } from '../scorecard/scorecard.component';
import { CommentaryComponent } from '../commentary/commentary.component';
import { GraphComponent } from '../graph/graph.component';


const routes: Routes = [


  { path: '', component: MainComponent },
  { path: 'matchstate', component: CommonComponent },
  { path: 'scorecard', component: ScorecardComponent,outlet:'scorecard' },
  { path: 'commentory', component: CommentaryComponent,outlet:'commentary'},
  { path: 'matchstate/scorecard', component: ScorecardComponent},
  { path: 'matchstate/commentory', component: CommentaryComponent,outlet:'commentory' },
  { path: 'graph', component: GraphComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
