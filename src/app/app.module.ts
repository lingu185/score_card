import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainModule } from './main/main/main.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { CommonService } from './common.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,NgSlimScrollModule,
    MainModule,RouterModule.forRoot([]),
  ],
  providers: [ {

    provide: SLIMSCROLL_DEFAULTS,
    useValue: {
      alwaysVisible: false,
      gridOpacity: '0.2', barOpacity: '0.5',
      gridBackground: '#fff',
      gridWidth: '6',
      gridMargin: '2px 2px',
      barBackground: '#fff',
      barWidth: '20',
      barMargin: '2px 2px'
    }
  },CommonService],
  bootstrap: [AppComponent],

})
export class AppModule { }
