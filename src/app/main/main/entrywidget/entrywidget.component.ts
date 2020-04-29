import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-entrywidget',
  templateUrl: './entrywidget.component.html',
  styleUrls: ['./entrywidget.component.css']
})
export class EntrywidgetComponent implements OnInit {
  public wkt1 = [];
  public wkt2 = [];
  public wkt3 = [];
  public wkt7 = [];
  public seriesfullname;
  public matchtype;
  public stadium;
  public awayteamlength;
  public hometeamlength;
  public data;
  public replaceData
  public awayinningsid;
  public battingoptaid;
  public bowlingoptaid;
  public homeinnings1;
  public awayinnings1
  public resultawayteam;
  public resulthometeam;
  public homeinningsid;
  public gamedetailslength;
  public slider1stinningsaway;
  public slider2ndinningsaway;
  public slider1stinningshome;
  public wkt4 = [];
  public wkt6 = [];
  public common1;
  public common2;
  public ipldata;
  public inningsonewkt;
  public inningsonerun;
  public inningsoneovr;
  public gamedate;
  public wkt2Condition = true;
  public wkt2Condition1 = false;
  public id;
  public internationallength;
  public ipllength;
  public womenlength;
  public totallength;
  public gamestatus;
  public resultlength;
  public awayteamintshortname;
  public hometeamintshortname;
  public hometeamintfullname;
  public awayteamintfullname;
  public awayteamintoptaid;
  public hometeamintoptaid;
  public batttingoptaidint;
  public bowlingoptaidint;
  public inningsrunint;
  public inningswktint;
  public inningsoverint;
  public inningsrunint1;
  public inningswktint1;
  public inningsoverint1;
  public inningswkt1;
  public stadiuem;
  public teamfullnameint;
  public wkt8=[];
  public gametimeipl;
  public selectedIndex;
  public Series;
  public totallivematchlength;
  constructor(public commonservice: CommonService) { }
  ngOnInit() {

    // this.id = setInterval(() => {
    //   this.getWidget(this.totallength);
    //   this.getWidgetsInternational(this.ipllength, this.totallength);
    //   this.getWidgetsWomens(this.internationallength, this.ipllength)
    // }, 3000)
    this.getWidget();
    this.getWidgetsInternational(this.ipllength);
    //this.getWidgetsWomens(this.ipllength,this.internationallength);
  
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    };
  }
  
  carouselOptions = {
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide '><b> < <b> </div>", "<div class='nav-btn next-slide'> <b> > <b>  </div>"],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        loop: false
      },
      600: {
        items: 1,
        loop: false
      },
      1000: {
        items: 1,
        loop: false
      },

    }
  }

  getWidget() {

    this.commonservice.getWidget().subscribe(data => {
      data
     
  
      this.resultlength=data.data.results.length;

     // console.log(data);
      for(let i=0;i<this.resultlength;i++){
        var Id=data.data.results[i].fixture_id;
      var awayteaminternational=  data.data.results[i].away_team;
      var hometeaminternational=  data.data.results[i].home_team;
     var inningslength= data.data.results[i].gameDetails.innings.length;
     var seriesname=  data.data.results[i].competetions.comp_name;
     this.seriesfullname= seriesname.replace(/\s/g, "-")
   //  console.log(  this.seriesfullname);
        data.data.results[i].venue.length;
      //  console.log(  inningslength);
        
       this.gametimeipl =data.data.results[i].game_date_time;

      for(let j=0;j<awayteaminternational.length;j++){
      this.awayteamintshortname= awayteaminternational[j].team_short_name;
      this.hometeamintshortname=hometeaminternational[j].team_short_name;
      this.awayteamintfullname=awayteaminternational[j].team_full_name;
      this.hometeamintfullname=hometeaminternational[j].team_full_name;
      this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
      this.hometeamintoptaid=hometeaminternational[j].opta_team_id;
    for(let k=0;k<data.data.results[i].venue.length;k++){
      this.stadiuem=data.data.results[i].venue[k].venue;
 
      
    }
    
   
      
      }
    
     if(inningslength>=1){
     data.data.results[i].gameDetails.innings[0].battingteam;
     data.data.results[i].gameDetails.innings[0].bowlingteam;
  
    this.batttingoptaidint= data.data.results[i].gameDetails.innings[0].battingteam;
    this.bowlingoptaidint= data.data.results[i].gameDetails.innings[0].bowlingteam;
     this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
     this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
       this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
       this.inningsrunint1= data.data.results[i].gameDetails.innings[1].Total.runs_scored;
       this.inningsoverint1=  data.data.results[i].gameDetails.innings[1].Total.overs;
         this.inningswkt1= data.data.results[i].gameDetails.innings[1].Total.wickets;
         this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
     }
     if(inningslength===1){
     this.batttingoptaidint= data.data.results[i].gameDetails.innings[0].battingteam;
     this.bowlingoptaidint= data.data.results[i].gameDetails.innings[0].bowlingteam;

      this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
      this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
        this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
      
      }
      if(inningslength===0){
        for(let j=0;j<awayteaminternational.length;j++){
          this.awayteamintshortname= awayteaminternational[j].team_short_name;
          this.hometeamintshortname=hometeaminternational[j].team_short_name;
          this.awayteamintfullname=awayteaminternational[j].team_full_name;
          this.hometeamintfullname=hometeaminternational[j].team_full_name;
          this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
          this.hometeamintoptaid=hometeaminternational[j].opta_team_id;
          this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
        }

      }
     if ( this.batttingoptaidint ===  this.awayteamintoptaid) {
      var finnings1cname= this.awayteamintshortname;

    console.log('1nd1', finnings1cname);

      
    } if ( this.batttingoptaidint ===  this.hometeamintoptaid) {
  var finnings1cname=this.hometeamintshortname;

 console.log('1nd12', finnings1cname);
    } if (  this.bowlingoptaidint ===  this.hometeamintoptaid) {
    var sinnings2cname= this.hometeamintshortname;
      
//console.log('2nd1', sinnings2cname);

    } if (  this.bowlingoptaidint === this.awayinningsid) {
      var sinnings2cname= this.awayteamintshortname;
//console.log( '2nd',sinnings2cname);
    }

     
    
this.wkt8.push({firstinningsname: finnings1cname,secinningsname:sinnings2cname,Id:Id,id:'vs',firstinningsrun:this.inningsrunint,firstinningswkt:this.inningsonewkt,firstinngsovers: this.inningsoverint,secinningsrun:this.inningsrunint1,secinningswkt:this.inningswkt1,secinningsover:this.inningsoverint1,flag:this.batttingoptaidint,flag1:this.bowlingoptaidint,stadium:this.stadiuem,teamfullname:this.teamfullnameint,time:this.gametimeipl,seriesname: this.seriesfullname})
  
   
} 
//console.log(this.wkt8);
      // console.log('test',this.wkt3);


      //UPCOMING IPL
    //  console.log(data.data.upcoming);
      
      for (let i = 0; i < data.data.upcoming.length; i++) {
        data.data.upcoming[i].away_team;
        this.gamedate = data.data.upcoming[i].game_date_string;
       // console.log( this.gamedate);

        this.matchtype = data.data.upcoming[i].description;
        data.data.upcoming[i].description;
        data.data.upcoming[i].venue;
        // console.log(     data.data.upcoming[i].venue);
        for (let k = 0; k < data.data.upcoming[i].venue.length; k++) {
          this.stadium = data.data.upcoming[i].venue[k].venue;
          var time = data.data.upcoming[i].time;
          //  console.log( time);

          this.battingoptaid = this.gamedetailslength[0].battingteam;
          this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;
          //console.log(this.battingoptaid);



          var Id = data.data.upcoming[i].fixture_id;


          for (let j = 0; j < data.data.upcoming[i].away_team.length; j++) {
            data.data.upcoming[i].away_team[j].team_short_name;
            var awayTeamName = data.data.upcoming[i].away_team[j].team_short_name;
            var awayTeaminngsidup1 = data.data.upcoming[i].away_team[j].opta_team_id;
            var homeTeamName = data.data.upcoming[i].home_team[j].team_short_name;
            var homeTeaminningsidup1 = data.data.upcoming[i].home_team[j].opta_team_id;
            if (this.wkt6.length <= 8) {
              this.wkt6.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, time: this.gamedate,  flagbatting: homeTeaminningsidup1, flagbowling: awayTeaminngsidup1 });
            }
          }


        }
       
        // console.log('upcoming',this.wkt6);
      }

      //live ipl

      this.ipldata = data;
      //console.log(this.ipldata);

      if (data.length === 0) {
        this.wkt2Condition = true;
        this.wkt2Condition1 = false;
      }
      this.ipllength = data.data.current.length;
      var data1 = data.data.current.length;
    console.log( this.ipllength);
      //console.log( data.data.current.length);
      for (let i = 0; i < data1; i++) {

        data.data.current[i].away_team
        this.matchtype = data.data.current[i].description;
        data.data.current[i].description;
        data.data.current[i].venue;
     
    //    console.log( data.data.current[i].venue);
        
        var Id = data.data.current[i].fixture_id;
         //console.log(     data.data.current[i].venue);
        for (let k = 0; k < data.data.current[i].venue.length; k++) {
          this.stadium = data.data.current[i].venue[k].venue;

          for (let j = 0; j < data.data.current[i].away_team.length; j++) {
     
            var awayTeamName = data.data.current[i].away_team[j].team_short_name;
            var homeTeamName = data.data.current[i].home_team[j].team_short_name;
            var awayTeamfullName = data.data.current[i].away_team[j].team_full_name;
            var homeTeamfullName = data.data.current[i].home_team[j].team_full_name;
          //  var inningsscore = data.data.current[i].gameDetails.innings;
            var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
            // for (let m = 0; m < inningsscore.length; m++) {
            //   var inngsrun = inningsscore[m].Total.runs_scored;
            //   var inningsover = inningsscore[m].Total.overs;
            //   var inningswkt = inningsscore[m].Total.wickets;

            //   // console.log( inngsrun,inningsover,inningswkt);

            //   // console.log(  inningsscore[1].Total.runs_scored);
           
            // console.log(teamfullname);
            // }
            this. getWidgetsInternational(this.ipllength);
          }
          // console.log('fhg');

          
          //athis.wkt2.push({Id:Id});
        }
        if (this.wkt7.length <=3) {
          this.wkt7.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname,seriesname: this.seriesfullname });
        //  console.log('live',this.wkt7);
        }
      }
     
    });

  }


  // started here international

  getWidgetsInternational(ipllength) {

  

    this.commonservice.getWidgetsInternational(ipllength).subscribe(data => {
      
 // console.log("ipl interdata",this.ipllength);
//upcoming international
  


for (let i = 0; i < data.data.upcoming.length; i++) {
  data.data.upcoming[i].away_team;
  this.gamedate = data.data.upcoming[i].game_date_time;
//console.log( this.gamedate);

  this.matchtype = data.data.upcoming[i].description;
  data.data.upcoming[i].description;
  data.data.upcoming[i].venue;

  // console.log(     data.data.upcoming[i].venue);
  for (let k = 0; k < data.data.upcoming[i].venue.length; k++) {
    this.stadium = data.data.upcoming[i].venue[k].venue;
    var time = data.data.upcoming[i].time;
    //  console.log( time);

    // this.battingoptaid = this.gamedetailslength[0].battingteam;
    // this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;
    // //console.log(this.battingoptaid);



    var Id = data.data.upcoming[i].fixture_id;


    for (let j = 0; j < data.data.upcoming[i].away_team.length; j++) {
      data.data.upcoming[i].away_team[j].team_short_name;
      var awayTeamName = data.data.upcoming[i].away_team[j].team_short_name;
      var awayTeaminngsidup1 = data.data.upcoming[i].away_team[j].opta_team_id;
      var homeTeamName = data.data.upcoming[i].home_team[j].team_short_name;
      var homeTeaminningsidup1 = data.data.upcoming[i].home_team[j].opta_team_id;
      if (this.wkt6.length <= 8) {
        this.wkt6.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, time: this.gamedate, flagbatting: homeTeaminningsidup1, flagbowling: awayTeaminngsidup1 });
      }
    }


  }
  // console.log('upcoming',this.wkt6);
}





      this.resultlength=data.data.results.length;

     // console.log(data);
      for(let i=0;i<this.resultlength;i++){
        var Id=data.data.results[i].fixture_id;
      var awayteaminternational=  data.data.results[i].away_team;
      var hometeaminternational=  data.data.results[i].home_team;
     var inningslength= data.data.results[i].gameDetails.innings.length;
   var seriesname=  data.data.results[i].competetions.comp_name;
       this.Series = data.data.results[i].venue.length;
      
       this.seriesfullname= seriesname.replace(/\s/g, "-")
     //  console.log(  this.seriesfullname);
        
      var gamedateint=  data.data.results[i].game_date_time;

      for(let j=0;j<awayteaminternational.length;j++){
      this.awayteamintshortname= awayteaminternational[j].team_short_name;
      this.hometeamintshortname=hometeaminternational[j].team_short_name;
      this.awayteamintfullname=awayteaminternational[j].team_full_name;
      this.hometeamintfullname=hometeaminternational[j].team_full_name;
      this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
      this.hometeamintoptaid=hometeaminternational[j].opta_team_id;

    for(let k=0;k<data.data.results[i].venue.length;k++){
      this.stadiuem=data.data.results[i].venue[k].venue;
 
      
    }
    //console.log(seriesfullname);
   
      
      }
    
     if(inningslength==2){
    //  console.log('inn22');
     data.data.results[i].gameDetails.innings[0].battingteam;
     data.data.results[i].gameDetails.innings[0].bowlingteam;
  
    this.batttingoptaidint= data.data.results[i].gameDetails.innings[1].battingteam;
    this.bowlingoptaidint= data.data.results[i].gameDetails.innings[1].bowlingteam;
     this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
     this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
       this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
       this.inningsrunint1= data.data.results[i].gameDetails.innings[1].Total.runs_scored;
       this.inningsoverint1=  data.data.results[i].gameDetails.innings[1].Total.overs;
         this.inningswkt1= data.data.results[i].gameDetails.innings[1].Total.wickets;
 var seriesname=  data.data.results[i].competetions.comp_name;
     this.seriesfullname= seriesname.replace(/\s/g, "-")
    // console.log(  this.seriesfullname);
         this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
       
     }
     if(inningslength===1){
     this.batttingoptaidint= data.data.results[i].gameDetails.innings[0].battingteam; 
     this.bowlingoptaidint= data.data.results[i].gameDetails.innings[0].bowlingteam;

      this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
      this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
        this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
      
      }
      if(inningslength===0){
      //  console.log('inn');
        for(let j=0;j<awayteaminternational.length;j++){
          this.awayteamintshortname= awayteaminternational[j].team_short_name;
          this.hometeamintshortname=hometeaminternational[j].team_short_name;
          this.awayteamintfullname=awayteaminternational[j].team_full_name;
          this.hometeamintfullname=hometeaminternational[j].team_full_name;
          this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
          this.hometeamintoptaid=hometeaminternational[j].opta_team_id;
          this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
       //  console.log('away', this.awayteamintshortname);
    
       //  console.log('home',  this.hometeamintshortname);


         
          
        }

      }
     if ( this.batttingoptaidint ===  this.awayteamintoptaid) {
      var finnings1cname= this.awayteamintshortname;

    //  console.log('1nd1', finnings1cname);

      
    } if ( this.batttingoptaidint ===  this.hometeamintoptaid) {
  var finnings1cname=this.hometeamintshortname;

 // console.log('1nd1', finnings1cname);
    } if (  this.bowlingoptaidint ===  this.hometeamintoptaid) {
    var sinnings2cname= this.hometeamintshortname;
      
//console.log('2nd1', sinnings2cname);

    } if (  this.bowlingoptaidint === this.awayinningsid) {
      var sinnings2cname= this.awayteamintshortname;
//console.log( '2nd',sinnings2cname);
    }

     
    
this.wkt8.push({firstinningsname: finnings1cname,secinningsname:sinnings2cname,Id:Id,id:'vs',firstinningsrun:this.inningsrunint,firstinningswkt:this.inningsonewkt,firstinngsovers: this.inningsoverint,secinningsrun:this.inningsrunint1,secinningswkt:this.inningswkt1,secinningsover:this.inningsoverint1,flag:this.batttingoptaidint,flag1:this.bowlingoptaidint,stadium:this.stadiuem,teamfullname:this.teamfullnameint,time:gamedateint,seriesname:this.seriesfullname})
 // console.log(this.wkt8);
   
}
      //live international

      this.ipldata = data;
      //console.log(this.ipldata);

 
      this.internationallength = data.data.current.length;
      var data1 = data.data.current.length;
    //  this.totallength= this.internationallength +this.ipllength;

      this.totallivematchlength= this.internationallength+this.ipllength;

      console.log('total',this.totallivematchlength);  
 if (this.totallivematchlength === 0) {
//     console.log("it is live match");
  this.selectedIndex = 1;
 } 
 else if(this.totallivematchlength >= 1) {
   console.log("not live match");
   this.selectedIndex = 0;
 }


      console.log(this.internationallength);

      for (let i = 0; i < data1; i++) {
        data.data.current[i].away_team;
        this.matchtype = data.data.current[i].description;
      
        //  console.log(     data.data.current[i].venue);
        for (let k = 0; k < data.data.current[i].venue.length; k++) {
          this.stadium = data.data.current[i].venue[k].venue;
          //   console.log( data.data.current[i].venue[k].venue);


          var Id = data.data.current[i].fixture_id;

          for (let j = 0; j < data.data.current[i].away_team.length; j++) {
            data.data.current[i].away_team[j].team_short_name;
            var awayTeamName = data.data.current[i].away_team[j].team_short_name;
            var homeTeamName = data.data.current[i].home_team[j].team_short_name;
            var awayTeamfullName = data.data.current[i].away_team[j].team_full_name;
            var homeTeamfullName = data.data.current[i].home_team[j].team_full_name;
          var awayteamoptaidlive=  data.data.current[i].away_team[j].opta_team_id;
           var hometeamoptaidlive= data.data.current[i].home_team[j].opta_team_id;
            var inningsscore = data.data.results[i].gameDetails.innings;
            for (let m = 0; m < inningsscore.length; m++) {
              var inngsrun = inningsscore[m].Total.runs_scored;
              var inningsover = inningsscore[m].Total.overs;
              var inningswkt = inningsscore[m].Total.wickets;

              // console.log( inngsrun,inningsover,inningswkt);

              // console.log(  inningsscore[1].Total.runs_scored);
              var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
           //   console.log(teamfullname);
            }
         //   console.log("awayTeamName", awayTeamName);
        //    console.log("homeTeamName", homeTeamName);


      // this. getWidgetsWomens( this.ipllength, this.internationallength )
          }
          // console.log(this.wkt2);
          //athis.wkt2.push({Id:Id});
        }
        

          this.wkt7.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname,flag:awayteamoptaidlive,flag1:hometeamoptaidlive });
        console.log('wkt7',this.wkt7);
        
        
      }
     
    });
  }

  // ended here//



//   getWidgetsWomens(ipllength,internationallength) {
 

//     this.commonservice.getWidgetsWomens(ipllength,internationallength).subscribe(data => {
//      console.log('womens',this.internationallength);
//      console.log('ipl',this.ipllength);
//  this.totallivematchlength= this.internationallength+this.ipllength
//         console.log('total',this.totallivematchlength);
//    if (this.totallivematchlength === 0) {
//     console.log("it is live match");
//     this.selectedIndex = 0;
//   } else if(this.totallivematchlength >= 1) {
//     console.log("not live match");
//     this.selectedIndex = 1;
//   }


//         for (let i = 0; i < data.data.upcoming.length; i++) {
//           data.data.upcoming[i].away_team;
//           this.gamedate = data.data.upcoming[i].game_date_time;
//           //console.log( this.gamedate);

//           //  this.battingoptaid = this.gamedetailslength[0].battingteam;
//           //  this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;
//           this.matchtype = data.data.upcoming[i].description;
//           data.data.upcoming[i].description;
//           data.data.upcoming[i].venue;

//           // console.log(     data.data.upcoming[i].venue);
//           for (let k = 0; k < data.data.upcoming[i].venue.length; k++) {
//             this.stadium = data.data.upcoming[i].venue[k].venue;
//             //   console.log( data.data.upcoming[i].venue[k].venue);
//             var Id = data.data.upcoming[i].fixture_id;

//             for (let j = 0; j < data.data.upcoming[i].away_team.length; j++) {
//               data.data.upcoming[i].away_team[j].team_short_name;
//               var awayTeamName = data.data.upcoming[i].away_team[j].team_short_name;
//               var homeTeamName = data.data.upcoming[i].home_team[j].team_short_name;
//               var awayTeamoptaid = data.data.upcoming[i].away_team[j].opta_team_id;
//               var homeTeamoptaid= data.data.upcoming[i].home_team[j].opta_team_id;
//               var time = data.data.upcoming[i].time;
//               if (this.wkt6.length <= 8) {
//                 this.wkt6.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, time: this.gamedate, flagbatting:homeTeamoptaid, flagbowling:awayTeamoptaid  });
//               }
//             }
//              console.log(  this.wkt7 );
//             //athis.wkt2.push({Id:Id});
//           }
        
//       }
//         //resultwomen
//       this.resultlength=data.data.results.length;

//      // console.log(data);
//       for(let i=0;i<this.resultlength;i++){
//         var Id=data.data.results[i].fixture_id;
//       var awayteaminternational=  data.data.results[i].away_team;
//       var hometeaminternational=  data.data.results[i].home_team;
//      var inningslength= data.data.results[i].gameDetails.innings.length;

//         data.data.results[i].venue.length;
//         //console.log(  inningslength);
        
//        var gamedatewomens= data.data.results[i].game_date_time;

//       for(let j=0;j<awayteaminternational.length;j++){
//       this.awayteamintshortname= awayteaminternational[j].team_short_name;
//       this.hometeamintshortname=hometeaminternational[j].team_short_name;
//       this.awayteamintfullname=awayteaminternational[j].team_full_name;
//       this.hometeamintfullname=hometeaminternational[j].team_full_name;
//       this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
//       this.hometeamintoptaid=hometeaminternational[j].opta_team_id;
    
//     for(let k=0;k<data.data.results[i].venue.length;k++){
//       this.stadiuem=data.data.results[i].venue[k].venue;
 
      
//     }
    
//       }
    
//      if(inningslength>=1){
  
  
  
//     this.batttingoptaidint= data.data.results[i].gameDetails.innings[0].battingteam;
//     this.bowlingoptaidint= data.data.results[i].gameDetails.innings[0].bowlingteam;
//      this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
//      this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
//        this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
//        this.inningsrunint1= data.data.results[i].gameDetails.innings[1].Total.runs_scored;
//        this.inningsoverint1=  data.data.results[i].gameDetails.innings[1].Total.overs;
//          this.inningswkt1= data.data.results[i].gameDetails.innings[1].Total.wickets;
//          this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
   
     
         
         
//      }

//     else  if(inningslength===1){
//      this.batttingoptaidint= data.data.results[i].gameDetails.innings[0].battingteam;
//      this.bowlingoptaidint= data.data.results[i].gameDetails.innings[0].bowlingteam;

//       this.inningsrunint= data.data.results[i].gameDetails.innings[0].Total.runs_scored;
//       this.inningsoverint=  data.data.results[i].gameDetails.innings[0].Total.overs;
//         this.inningsonewkt= data.data.results[i].gameDetails.innings[0].Total.wickets;
      
//       }
//       else if(inningslength===0){
//         for(let j=0;j<awayteaminternational.length;j++){
//           this.awayteamintshortname= awayteaminternational[j].team_short_name;
//           this.hometeamintshortname=hometeaminternational[j].team_short_name;
//           this.awayteamintfullname=awayteaminternational[j].team_full_name;
//           this.hometeamintfullname=hometeaminternational[j].team_full_name;
//           this.awayteamintoptaid=awayteaminternational[j].opta_team_id;
//           this.hometeamintoptaid=hometeaminternational[j].opta_team_id;
//           this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
        
          
//         }

//       }
//     // console.log('this.bat',this.batttingoptaidint);
     
     
      
//      if ( this.batttingoptaidint === this.awayteamintoptaid) {
//      // console.log( 'bat',this.batttingoptaidint);
//     //  console.log(  this.awayteamintoptaid);


//       var finnings1cname= this.awayteamintshortname;

//      /// console.log('1nd1', finnings1cname);

      
//     } if ( this.batttingoptaidint ===  this.hometeamintoptaid) {
//   var finnings1cname=this.hometeamintshortname;

//   //console.log('1nd2', finnings1cname);
//     } if (  this.bowlingoptaidint === this.awayinningsid) {
//       var sinnings2cname= this.awayteamintshortname;
// //console.log( '2nd',sinnings2cname);
//     }if (  this.bowlingoptaidint ===  this.hometeamintoptaid) {
//       var sinnings2cname= this.hometeamintshortname;
//       ///  console.log('2nd1', sinnings2cname);
  
//       } 

     
    
// this.wkt8.push({firstinningsname: finnings1cname,secinningsname:sinnings2cname,Id:Id,id:'vs',firstinningsrun:this.inningsrunint,firstinningswkt:this.inningsonewkt,firstinngsovers: this.inningsoverint,secinningsrun:this.inningsrunint1,secinningswkt:this.inningswkt1,secinningsover:this.inningsoverint1,flag:this.batttingoptaidint,flag1:this.bowlingoptaidint,stadium:this.stadiuem,teamfullname:this.teamfullnameint,time:gamedatewomens})
// //   console.log(this.wkt8);
   
// }
//         //live women

//         this.ipldata = data;
//         //console.log(this.ipldata);

//         if (data.length === 0) {
//           this.wkt2Condition = true;
//           this.wkt2Condition1 = false;
//         }
//         this.womenlength = data.data.current.length;
//         var data1 = data.data.current.length;
//         //console.log(data1);

//         //console.log(this.totallength);

//         for (let i = 0; i < data1; i++) {
//           data.data.current.length
//           // console.log(data.data.current);

//           data.data.current[i].away_team
//           this.matchtype = data.data.current[i].description;
//           data.data.current[i].description;
//           data.data.current[i].venue;
//           //  console.log(     data.data.current[i].venue);
//           for (let k = 0; k < data.data.current[i].venue.length; k++) {
//             this.stadium = data.data.current[i].venue[k].venue;
//             //   console.log( data.data.current[i].venue[k].venue);


//             var Id = data.data.current[i].fixture_id;

//             for (let j = 0; j < data.data.current[i].away_team.length; j++) {
//               data.data.current[i].away_team[j].team_short_name;
//               var awayTeamName = data.data.current[i].away_team[j].team_short_name;
//               var homeTeamName = data.data.current[i].home_team[j].team_short_name;
//               var awayteamoptaidwomenlive=  data.data.current[i].away_team[j].opta_team_id;
//               var hometeamoptaidwomenlive= data.data.current[i].home_team[j].opta_team_id;
//               var seriesname=  data.data.results[i].competetions.comp_name;
//               this.seriesfullname= seriesname.replace(/\s/g, "-")
//               var inningsscore = data.data.results[i].gameDetails.innings;
//               for (let m = 0; m < inningsscore.length; m++) {
//                 var inngsrun = inningsscore[m].Total.runs_scored;
//                 var inningsover = inningsscore[m].Total.overs;
//                 var inningswkt = inningsscore[m].Total.wickets;

//                 // console.log( inngsrun,inningsover,inningswkt);

//                 // console.log(  inningsscore[1].Total.runs_scored);
//                this. teamfullnameint = this.awayteamintfullname.replace(/\s/g, '') + '-vs-' + this.hometeamintfullname.replace(/\s/g, '');
//                 // console.log(teamfullname);

//               }

//             //  console.log();

             
//             }

//             //this.wkt2.push({Id:Id});
//           }
//           if (this.wkt7.length <= 1) {

//             this.wkt7.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: this.teamfullnameint,flag:awayteamoptaidwomenlive,flag1:hometeamoptaidwomenlive ,seriesname:this.seriesfullname});
//           }
//         }
//         //console.log('upcoming',this.wkt6);

      
//     })

//   };
}