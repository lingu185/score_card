import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  public wkt1;
  public matchtype;
  public stadium;
  public wkt2 = [];
  public wkt2Condition=true;
  public wkt2Condition1=false;
  public ipldata;
  constructor(public commonservice: CommonService) { }
 
  ngOnInit() {
    this.checkfunction();
    console.log('live');
  }
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },

    }
  }
  checkfunction() {
    // //this.commonservice.getWidget().subscribe(data => {

    //   this.ipldata=data;
    //   console.log(this.ipldata);
      
    //   if(data.length===0){
    //     this.wkt2Condition=true;
    //     this.wkt2Condition1=false;
    //   }
      
    //   var data1 = data.data.current.length;
    //   console.log(data.data.current);

    //   for (let i = 0; i < data1; i++) {
    //     data.data.current[i].away_team
    //     this.matchtype = data.data.current[i].description;
    //     data.data.current[i].description;
    //     data.data.current[i].venue;
    //     //  console.log(     data.data.current[i].venue);
    //     for (let k = 0; k < data.data.current[i].venue.length; k++) {
    //       this.stadium = data.data.current[i].venue[k].venue;
    //       //   console.log( data.data.current[i].venue[k].venue);


    //       var Id = data.data.current[i].fixture_id;

    //       for (let j = 0; j < data.data.current[i].away_team.length; j++) {
    //         data.data.current[i].away_team[j].team_short_name;
    //         var awayTeamName = data.data.current[i].away_team[j].team_short_name;
    //         var homeTeamName = data.data.current[i].home_team[j].team_short_name;
    //         var inningsscore= data.data.results[i].gameDetails.innings;
    //         for(let m=0;m<inningsscore.length;m++){
    //           var inngsrun= inningsscore[m].Total.runs_scored;
    //          var inningsover= inningsscore[m].Total.overs;
    //           var inningswkt=inningsscore[m].Total.wickets;
     
    //          // console.log( inngsrun,inningsover,inningswkt);
             
    //             // console.log(  inningsscore[1].Total.runs_scored);
                 
    //          }
    //         this.wkt2.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium });
    //       }
    //      console.log(this.wkt2);
    //       //athis.wkt2.push({Id:Id});
    //     }

    //   }
     

    // });



  }

  
}
