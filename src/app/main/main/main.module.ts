import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSlimScrollModule,  } from 'ngx-slimscroll';
import { MainComponent } from './main.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import {MainRoutingModule}from './main-routing.module';
import { EntrywidgetComponent } from './entrywidget/entrywidget.component';
import { LiveComponent } from './live/live.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ResultComponent } from './result/result.component';
import { MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatToolbarModule, MatCardModule, MatPaginatorModule,  } from '@angular/material';
import { OwlModule } from 'ngx-owl-carousel';
import { Sinnings1Component } from './scorecard/sinnings1/sinnings1.component';
import { Sinnings2Component } from './scorecard/sinnings2/sinnings2.component';
import { Sinnings3Component } from './scorecard/sinnings3/sinnings3.component';
import { Sinnings4Component } from './scorecard/sinnings4/sinnings4.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { Cinnings1Component } from './commentary/cinnings1/cinnings1.component';
import { Cinnings2Component } from './commentary/cinnings2/cinnings2.component';
import { Cinnings3Component } from './commentary/cinnings3/cinnings3.component';
import { Cinnings4Component } from './commentary/cinnings4/cinnings4.component';
import { GraphComponent } from './graph/graph.component';
import { NgMarqueeModule } from 'ng-marquee';
import { LivescoreComponent } from './livescore/livescore.component';
import { LivecommentaryComponent } from './livecommentary/livecommentary.component';
import { CommonComponent } from './common/common.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NodatafoundComponent } from './nodatafound/nodatafound.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
@NgModule({
  declarations: [MainComponent, ScorecardComponent, EntrywidgetComponent, LiveComponent, UpcomingComponent, ResultComponent, Sinnings1Component, Sinnings2Component, Sinnings3Component, Sinnings4Component, CommentaryComponent, Cinnings1Component, Cinnings2Component, Cinnings3Component, Cinnings4Component, GraphComponent, LivescoreComponent, LivecommentaryComponent, CommonComponent, NodatafoundComponent],
  imports: [
    CommonModule,BrowserAnimationsModule,MainRoutingModule, MatButtonModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatTabsModule, MatTableModule, MatToolbarModule, MatCardModule, MatPaginatorModule ,
    OwlModule,NgSlimScrollModule,NgMarqueeModule,NgScrollbarModule,
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA]
 
})
export class MainModule { }
