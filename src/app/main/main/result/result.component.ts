import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
 export class ResultComponent implements OnInit {
//   public wkt1 = [];
//   public wkt2 = [];
//   public wkt3 = [];
//   public responseList = [];
//   public matchtype;
//   public stadium;
//   public awayteamlength;
//   public hometeamlength;
//   public data;
//   public replaceData
//   public awayinningsid;
//   public battingoptaid;
//   public bowlingoptaid;
//   public homeinnings1;
//   public awayinnings1
//   public resultawayteam;
//   public resulthometeam;
//   public homeinningsid;
//   public gamedetailslength;
//   public slider1stinningsaway;
//   public slider2ndinningsaway;
//   public slider1stinningshome;
//   public wkt4 = [];
//   public common1;
//   public common2;
//   public ipldata;
//   public inningsonewkt;
//   public inningsonerun;
//   public inningsoneovr;
//   //@Input('ipldata') ipldata:any;
//   @Output() sendDataToParent = new EventEmitter();
 

//   public slider2ndinningshome;

   constructor(public commonservice: CommonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.checkfunction();
   // this.sendDataToParent.emit(this.ipldata)
console.log('result');

  }
//   carouselOptions = {
//     margin: 10,
//     nav: true,
//     navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
//     responsiveClass: true,
//     dots: true,
//     responsive: {
//       0: {
//         items: 1,
//         nav: true
//       },
//       600: {
//         items: 1,
//         nav: true
//       },
//       1000: {
//         items: 1,
//         nav: true,
//         loop: false
//       },

//     }
//   }
//   checkfunction() {
       
//     // this.commonservice.getWidgetsWomens().subscribe(data => {
//     //   data
//     //   for (let i = 0; i < data.data.results.length; i++) {
//     //     this.awayteamlength = data.data.results[i].away_team.length;
//     //     this.matchtype = data.data.results[i].description;
//     //     data.data.results[i].description;
//     //     data.data.results[i].venue;
//     //     //  console.log(     data.data.results[i].venue);
//     //     for (let k = 0; k < this.awayteamlength; k++) {
//     //       this.stadium = data.data.results[i].venue[k].venue;
//     //       //   console.log( data.data.results[i].venue[k].venue);


//     //       var Id = data.data.results[i].fixture_id;

//     //       for (let j = 0; j < this.awayteamlength; j++) {
//     //         data.data.results[i].away_team[j].team_short_name;
//     //         var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//     //         var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//     //         var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//     //         var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;


//     //         // console.log(data.data.results[i].home_team[j].opta_team_id);
//     //         this.replaceData = teamfullname;
//     //         //  console.log('replace',this. replaceData);


//     //         var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//     //         //console.log(teamfullname);
//     //         // innings based on the team score;



//     //         this.wkt2.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname });
//     //       }

//     //     }
//     //   }

//     // });
//     // //console.log(this.wkt3);

//     // this.commonservice.getWidgetsInternational().subscribe(data => {
//     //   data
//     //   for (let i = 0; i < data.data.results.length; i++) {
//     //     data.data.results[i].away_team
//     //     this.matchtype = data.data.results[i].description;
//     //     data.data.results[i].description;
//     //     data.data.results[i].venue;
//     //     //  console.log(     data.data.results[i].venue);
//     //     for (let k = 0; k < data.data.results[i].venue.length; k++) {
//     //       this.stadium = data.data.results[i].venue[k].venue;
//     //       //   console.log( data.data.results[i].venue[k].venue);


//     //       var Id = data.data.results[i].fixture_id;

//     //       for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//     //         data.data.results[i].away_team[j].team_short_name;
//     //         var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//     //         var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//     //         var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//     //         var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//     //         //  console.log();
//     //         this.replaceData = teamfullname;
//     //         //  console.log('replace',this. replaceData);


//     //         var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//     //         //console.log(teamfullname);


//     //         this.wkt2.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname });
//     //       }

//     //     }
//     //   }
//     // });
//     // console.log(this.wkt3);


//     this.commonservice.getWidget().subscribe(data => {
//       this.ipldata=data
//       // console.log('data getwidget',data.data.results);

//       // console.log( data.data.results.length);
//       for (let i = 0; i < data.data.results.length; i++) {
//         data.data.results[i].away_team
//         this.matchtype = data.data.results[i].description;
//         data.data.results[i].description;
//         data.data.results[i].venue;
//         //  console.log(     data.data.results[i].venue);
//         for (let k = 0; k < data.data.results[i].venue.length; k++) {
//           this.stadium = data.data.results[i].venue[k].venue;
//           //   console.log( data.data.results[i].venue[k].venue);


//           var Id = data.data.results[i].fixture_id;

//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);


//             this.wkt2.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname });
//           }
//         }
//       }
//     //  console.log(this.wkt2);

//       for (let i = 0; i < data.data.results.length; i++) {

//         this.resultawayteam = data.data.results[i].away_team;
//         this.resulthometeam = data.data.results[i].home_team;
//         //console.log(  data.data.results[i].home_team);
//         this.matchtype = data.data.results[i].description;
//         var Id = data.data.results[i].fixture_id;
//         this.gamedetailslength = data.data.results[i].gameDetails.innings;
//         var inningsscore = data.data.results[i].gameDetails.innings;
//        var inningsscore= data.data.results[i].gameDetails.innings;
//        // console.log(   inningsscore);
//         for(let m=0;m<inningsscore.length;m++){
//          var inngsrun= inningsscore[0].Total.runs_scored;
//         var inningsover= inningsscore[0].Total.overs;
//          var inningswkt=inningsscore[0].Total.wickets;

//         //  console.log(  inningsscore[1].Total.runs_scored);
//           var inngsrun1= inningsscore[1].Total.runs_scored;
//           var inningsover1= inningsscore[1].Total.overs;
//            var inningswkt1=inningsscore[1].Total.wickets;
  
//            // console.log(  inningsscore[1].Total.runs_scored);
            
//         }
        
//         // for (let r = 0; r < inningsscore.length; r++) {

//         //   this.inningsonerun = inningsscore[r].Total.runs_scored;
//         //   //console.log('1',inningsscore[j].Total.runs_scored);
//         //   console.log('total all', this.inningsonerun);
//         //   console.log();

//         //   this.inningsonewkt = inningsscore[r].Total.wickets;
//         //   this.inningsoneovr = inningsscore[r].Total.overs;
//         // }
//         //console.log( data.data.results[i].gameDetails.innings);

//         this.battingoptaid = this.gamedetailslength[0].battingteam;
//         this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;

//         //console.log('batting team inn1',  this. battingoptaid);
//         for (let j = 0; j < this.resultawayteam.length; j++) {
//           this.awayinningsid = this.resultawayteam[j].opta_team_id;
//           this.homeinningsid = this.resulthometeam[j].opta_team_id;
//           this.homeinnings1 = this.resultawayteam[j].team_short_name;
//           this.awayinnings1 = this.resulthometeam[j].team_short_name;

//           ///console.log(this.awayinningsid);
//           /// console.log( 'home', this.homeinningsid);

//           //console.log(this.homeinningsid);
//           if (this.battingoptaid === this.awayinningsid) {
//             var commomm = this.awayinnings1

//             // console.log('2nd innings',this.awayinnings1);

//             // this.wkt3.push({teamname:awayTeamName})
//           } if (this.battingoptaid === this.homeinningsid) {
//             var commomm = this.homeinnings1

//             // this.wkt3.push({teamname:homeTeamName})
//             //console.log('2nd innings',this.homeinnings1);


//           } if (this.bowlingoptaid === this.homeinningsid) {
//             var commomm1 = this.homeinnings1
//             // console.log( '1st innings',this.homeinnings1);

//           } if (this.bowlingoptaid === this.awayinningsid) {
//             var commomm1 = this.awayinnings1
//             //console.log('1st innings', this.awayinnings1);

//           } for (let k = 0; k < data.data.results[i].venue.length; k++) {
//             this.stadium = data.data.results[i].venue[k].venue;
//           }
//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);
//           }
        
//           // console.log(inningsscore);


          


//         }
//         this.wkt3.push({ name1: commomm1, id: 'vs', name: commomm, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname, firstinningsrun: inngsrun, firstinningswkt: inningswkt, finningsoneovers: inningsover,inningruntwo:inngsrun1,inningsovertwo:inningsover1,inningswkttwo:inningswkt1 })

//       }

//      // console.log(this.wkt3);


//       // console.log(this.wkt3);

//       //console.log(this.battingoptaid);
//       //console.log(this.awayinningsid);







//     });
//     this.commonservice.getWidgetsInternational().subscribe(data => {
//       // console.log('data getwidget',data.data.results);

//       // console.log( data.data.results.length);
//       for (let i = 0; i < data.data.results.length; i++) {
//         data.data.results[i].away_team
//         this.matchtype = data.data.results[i].description;
//         data.data.results[i].description;
//         data.data.results[i].venue;
//         //  console.log(     data.data.results[i].venue);
//         for (let k = 0; k < data.data.results[i].venue.length; k++) {
//           this.stadium = data.data.results[i].venue[k].venue;
//           //   console.log( data.data.results[i].venue[k].venue);


//           var Id = data.data.results[i].fixture_id;

//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);


//            // this.wkt3.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname });
//           }
//         }
//       }
//     //  console.log(this.wkt2);

//       for (let i = 0; i < data.data.results.length; i++) {

//         this.resultawayteam = data.data.results[i].away_team;
//         this.resulthometeam = data.data.results[i].home_team;
//         //console.log(  data.data.results[i].home_team);
//         this.matchtype = data.data.results[i].description;
//         var Id = data.data.results[i].fixture_id;
//         this.gamedetailslength = data.data.results[i].gameDetails.innings;
//         var inningsscore = data.data.results[i].gameDetails.innings;
//        var inningsscore= data.data.results[i].gameDetails.innings;
//        // console.log(   inningsscore);
//         for(let m=0;m<inningsscore.length;m++){
//          var inngsrun= inningsscore[0].Total.runs_scored;
//         var inningsover= inningsscore[0].Total.overs;
//          var inningswkt=inningsscore[0].Total.wickets;

//         //  console.log(  inningsscore[1].Total.runs_scored);
//           var inngsrun1= inningsscore[1].Total.runs_scored;
//           var inningsover1= inningsscore[1].Total.overs;
//            var inningswkt1=inningsscore[1].Total.wickets;
  
//            // console.log(  inningsscore[1].Total.runs_scored);
            
//         }
        
//         // for (let r = 0; r < inningsscore.length; r++) {

//         //   this.inningsonerun = inningsscore[r].Total.runs_scored;
//         //   //console.log('1',inningsscore[j].Total.runs_scored);
//         //   console.log('total all', this.inningsonerun);
//         //   console.log();

//         //   this.inningsonewkt = inningsscore[r].Total.wickets;
//         //   this.inningsoneovr = inningsscore[r].Total.overs;
//         // }
//         //console.log( data.data.results[i].gameDetails.innings);

//         this.battingoptaid = this.gamedetailslength[0].battingteam;
//         this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;

//         //console.log('batting team inn1',  this. battingoptaid);
//         for (let j = 0; j < this.resultawayteam.length; j++) {
//           this.awayinningsid = this.resultawayteam[j].opta_team_id;
//           this.homeinningsid = this.resulthometeam[j].opta_team_id;
//           this.homeinnings1 = this.resultawayteam[j].team_short_name;
//           this.awayinnings1 = this.resulthometeam[j].team_short_name;

//           ///console.log(this.awayinningsid);
//           /// console.log( 'home', this.homeinningsid);

//           //console.log(this.homeinningsid);
//           if (this.battingoptaid === this.awayinningsid) {
//             var commomm = this.awayinnings1

//             // console.log('2nd innings',this.awayinnings1);

//             // this.wkt3.push({teamname:awayTeamName})
//           } if (this.battingoptaid === this.homeinningsid) {
//             var commomm = this.homeinnings1

//             // this.wkt3.push({teamname:homeTeamName})
//             //console.log('2nd innings',this.homeinnings1);


//           } if (this.bowlingoptaid === this.homeinningsid) {
//             var commomm1 = this.homeinnings1
//             // console.log( '1st innings',this.homeinnings1);

//           } if (this.bowlingoptaid === this.awayinningsid) {
//             var commomm1 = this.awayinnings1
//             //console.log('1st innings', this.awayinnings1);

//           } for (let k = 0; k < data.data.results[i].venue.length; k++) {
//             this.stadium = data.data.results[i].venue[k].venue;
//           }
//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);
//           }
        
//           // console.log(inningsscore);


          


//         }
//         this.wkt3.push({ name1: commomm1, id: 'vs', name: commomm, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname, firstinningsrun: inngsrun, firstinningswkt: inningswkt, finningsoneovers: inningsover,inningruntwo:inngsrun1,inningsovertwo:inningsover1,inningswkttwo:inningswkt1 })

//       }

//      // console.log(this.wkt3);


//       // console.log(this.wkt3);

//       //console.log(this.battingoptaid);
//       //console.log(this.awayinningsid);







//     });
//     this.commonservice.getWidgetsWomens().subscribe(data => {
//       // console.log('data getwidget',data.data.results);

//       // console.log( data.data.results.length);
//       for (let i = 0; i < data.data.results.length; i++) {
//         data.data.results[i].away_team
//         this.matchtype = data.data.results[i].description;
//         data.data.results[i].description;
//         data.data.results[i].venue;
//         //  console.log(     data.data.results[i].venue);
//         for (let k = 0; k < data.data.results[i].venue.length; k++) {
//           this.stadium = data.data.results[i].venue[k].venue;
//           //   console.log( data.data.results[i].venue[k].venue);


//           var Id = data.data.results[i].fixture_id;

//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);


//            // this.wkt3.push({ name: awayTeamName, id: 'vs', name1: homeTeamName, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname });
//           }
//         }
//       }
//     //  console.log(this.wkt2);

//       for (let i = 0; i < data.data.results.length; i++) {

//         this.resultawayteam = data.data.results[i].away_team;
//         this.resulthometeam = data.data.results[i].home_team;
//         //console.log(  data.data.results[i].home_team);
//         this.matchtype = data.data.results[i].description;
//         var Id = data.data.results[i].fixture_id;
//         this.gamedetailslength = data.data.results[i].gameDetails.innings;
//         var inningsscore = data.data.results[i].gameDetails.innings;
//        var inningsscore= data.data.results[i].gameDetails.innings;
//        // console.log(   inningsscore);
//         for(let m=0;m<inningsscore.length;m++){
//          var inngsrun= inningsscore[0].Total.runs_scored;
//         var inningsover= inningsscore[0].Total.overs;
//          var inningswkt=inningsscore[0].Total.wickets;

//         //  console.log(  inningsscore[1].Total.runs_scored);
//           var inngsrun1= inningsscore[1].Total.runs_scored;
//           var inningsover1= inningsscore[1].Total.overs;
//            var inningswkt1=inningsscore[1].Total.wickets;
  
//            // console.log(  inningsscore[1].Total.runs_scored);
            
//         }
        
//         // for (let r = 0; r < inningsscore.length; r++) {

//         //   this.inningsonerun = inningsscore[r].Total.runs_scored;
//         //   //console.log('1',inningsscore[j].Total.runs_scored);
//         //   console.log('total all', this.inningsonerun);
//         //   console.log();

//         //   this.inningsonewkt = inningsscore[r].Total.wickets;
//         //   this.inningsoneovr = inningsscore[r].Total.overs;
//         // }
//         //console.log( data.data.results[i].gameDetails.innings);

//         this.battingoptaid = this.gamedetailslength[0].battingteam;
//         this.bowlingoptaid = this.gamedetailslength[0].bowlingteam;

//         //console.log('batting team inn1',  this. battingoptaid);
//         for (let j = 0; j < this.resultawayteam.length; j++) {
//           this.awayinningsid = this.resultawayteam[j].opta_team_id;
//           this.homeinningsid = this.resulthometeam[j].opta_team_id;
//           this.homeinnings1 = this.resultawayteam[j].team_short_name;
//           this.awayinnings1 = this.resulthometeam[j].team_short_name;

//           ///console.log(this.awayinningsid);
//           /// console.log( 'home', this.homeinningsid);

//           //console.log(this.homeinningsid);
//           if (this.battingoptaid === this.awayinningsid) {
//             var commomm = this.awayinnings1

//             // console.log('2nd innings',this.awayinnings1);

//             // this.wkt3.push({teamname:awayTeamName})
//           } if (this.battingoptaid === this.homeinningsid) {
//             var commomm = this.homeinnings1

//             // this.wkt3.push({teamname:homeTeamName})
//             //console.log('2nd innings',this.homeinnings1);


//           } if (this.bowlingoptaid === this.homeinningsid) {
//             var commomm1 = this.homeinnings1
//             // console.log( '1st innings',this.homeinnings1);

//           } if (this.bowlingoptaid === this.awayinningsid) {
//             var commomm1 = this.awayinnings1
//             //console.log('1st innings', this.awayinnings1);

//           } for (let k = 0; k < data.data.results[i].venue.length; k++) {
//             this.stadium = data.data.results[i].venue[k].venue;
//           }
//           for (let j = 0; j < data.data.results[i].away_team.length; j++) {
//             data.data.results[i].away_team[j].team_short_name;
//             var awayTeamName = data.data.results[i].away_team[j].team_short_name;
//             var homeTeamName = data.data.results[i].home_team[j].team_short_name;
//             var awayTeamfullName = data.data.results[i].away_team[j].team_full_name;
//             var homeTeamfullName = data.data.results[i].home_team[j].team_full_name;
//             //  console.log();
//             this.replaceData = teamfullname;
//             //  console.log('replace',this. replaceData);

//             var teamfullname = awayTeamfullName.replace(/\s/g, '') + '-vs-' + homeTeamfullName.replace(/\s/g, '');
//             //console.log(teamfullname);
//           }
        
//           // console.log(inningsscore);


          


//         }
//         this.wkt3.push({ name1: commomm1, id: 'vs', name: commomm, Id: Id, match: this.matchtype, stadium: this.stadium, teamfullname: teamfullname, firstinningsrun: inngsrun, firstinningswkt: inningswkt, finningsoneovers: inningsover,inningruntwo:inngsrun1,inningsovertwo:inningsover1,inningswkttwo:inningswkt1 })

//       }

//      // console.log(this.wkt3);


//       // console.log(this.wkt3);

//       //console.log(this.battingoptaid);
//       //console.log(this.awayinningsid);







//     });

//     //console.log(  this.wkt2);



//   }


 }
