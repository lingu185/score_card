import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { GraphComponent } from './graph/graph.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [


  { path: '', component: MainComponent },
 // { path: 'matchstate/:id/:teamfullname', component: CommonComponent },
  //{ path: 'scorecard', component: ScorecardComponent },
  // { path: 'commentory', component: CommentaryComponent,outlet:'commentary'},
   { path: 'cricket/matchcentre/:seriesname/:id/:teamfullname/scorecard', component:ScorecardComponent },
   { path: 'cricket/matchcentre/:seriesname/:id/:teamfullname/commentary', component:ScorecardComponent },
  { path: 'cricket/matchcentre/:seriesname/:id/:teamfullname/graph', component:ScorecardComponent },
  // { path: 'graph', component: GraphComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
