import { Component, OnInit ,Input, EventEmitter, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { innings3 } from './innings3';
import { CommonService } from 'src/app/common.service';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
@Component({
  selector: 'app-sinnings3',
  templateUrl: './sinnings3.component.html',
  styleUrls: ['./sinnings3.component.css']
})
export class Sinnings3Component implements OnInit {
  displayedColumns: string[] = ['BATTING', 'R', 'B', 'S/R'];
  displayedColumnsb: string[] = ['BOWLING', 'W', 'R', 'E/R'];
  displayedColumnsw: string[] = ['name', 'wickets'];
  dataSource;
  dataSourceb;
  dataSourcew;

  public innings;
  public batsman;
  public bowler;
  public wickets;
  public teamm: innings3;
  public wicketsid;
  public hometeam;
  public hometeamplayerid;
  public awayteam;
  public awayteamplayerid;
   public name=[];
  public playerlength;
  public players;
  public homename;
  public awayname;
  public frhometeam;
  public frawayteam;
  public frhomename;
  public frawayname;
  public wktid;
  public wktplayername; 
  public strikeplayername;
  public strikerun;
  public strikebal;
  public strikestatus;
  public strikesix;
  public strikefour;
  public totalstrikerate;
  public strikebatsman=[];
  public bowlername;
  public bowlerrun;
  public bowlerwicket;
  public bowleroverbowled;
  public ballbowled;
  public bowlermaidens_bowled;
  public bowlerno_balls;
  public bowlerwides;
  public bowlerdot_balls;
  public econmicyrate;
  public bowlerdata=[];
  public wide;
  public totalextra;
  public legbyes;
  public byes;
  public noballs;
  public penalties;
  public teamfullname;
  opts: ISlimScrollOptions;

  scrollEvents: EventEmitter<SlimScrollEvent>;
  @Input('Id') Id: string;
  @Input('childdata') childdata:any;
  constructor(private CommonService: CommonService) { }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log("chenagesss",changes);
   // console.log("child data",this.childdata);
    this.getContactsBasedOnId();
    
    
  }
  ngOnInit() {
    this.opts = {
      position: "right", // left | right
      barBackground: "red", // #C9C9C9
      barOpacity: "0.8", // 0.8
      barWidth: "10", // 10
      barBorderRadius: "20", // 20
      barMargin: "0", // 0
      gridBackground: "#d9d9d9", // #D9D9D9
      gridOpacity: "1", // 1
      gridWidth: "2", // 2
      gridBorderRadius: "20", // 20
      gridMargin: "0", // 0
      alwaysVisible: true, // true
      visibleTimeout: 1000, // 1000
    }
    this.getContactsBasedOnId();
    this.teamm = new innings3();
  }
 
  getContactsBasedOnId( ){
    this.childdata;
    this.bowlerdata=[];
    this.strikebatsman=[];
    this.name=[];
    // console.log('in');
    this.childdata;
    // this.CommonService.getContactsBasedOnId().subscribe((data) => {

      //console.log('in test');
      this.childdata.data.scorecard.data.forEach(element => {
        this.innings = element.innings;
        this.players = element.players;
        //  console.log( this.players);

      });
      //console.log(this.innings.length)
    

        this.batsman = this.innings[2].batsmen;
        this.bowler = this.innings[2].bowlers;
        this.wickets = this.innings[2].fallofwickets;
        this.teamfullname= this.innings[2].battingteams.team_full_name
        console.log(  this.innings[2].battingteams.team_full_name);
        this.legbyes = this.innings[2].extras.byes
        //  // console.log(   this.teamm.leg_byes);
        this.byes = this.innings[2].extras.byes;
    
        this.noballs = this.innings[2].extras.no_balls;
        this.penalties = this.innings[2].extras.penalties;
        this.totalextra = this.innings[2].extras.total_extras;
        this.wide = this.innings[2].extras.wides;
    
        this.dataSource = new MatTableDataSource(this.strikebatsman);
        this.dataSourceb = new MatTableDataSource(this.bowlerdata);
        this.dataSourcew = new MatTableDataSource(this.name);
        
      
for(let i=0;i<this.wickets.length;i++){
  this.wktid=this.wickets[i].player_id;
  //console.log(this.test);
  this.hometeam = this.players[0].playerslist;
  this.awayteam = this.players[1].playerslist;
  // console.log(this.hometeam.length);
  for(let j=0;j<this.hometeam.length;j++){
   this.frhometeam= this.hometeam[j].player_id;
  this.frawayteam= this.awayteam[j].player_id;
  this.frhomename=this.hometeam[j].player_ids.player_name;
  this.frawayname= this.awayteam[j].player_ids.player_name;
   // console.log( 'homeid',this.frhomename);


  if(this.wktid==this.frhometeam){
   this.wktplayername=this.frhomename;
    this.name.push({name:this.wktplayername,runs:this.wickets[i].runs,over_ball: this.wickets[i].over_ball,orderid:this.wickets[i].wicket_order});
//console.log(this.name);
  }else if(this.wktid==this.frawayteam){
   this.wktplayername=this.frawayname;
    this.name.push({name:this.wktplayername,runs:this.wickets[i].runs,over_ball: this.wickets[i].over_ball,orderid:this.wickets[i].wicket_order});
    //console.log('gfhgh');
    
   //console.log(this.name);
  }
};

  };
  for (let i = 0; i < this.batsman.length; i++) {

    this.strikeplayername = this.batsman[i].batsman_ids.player_name;
    this.strikerun = this.batsman[i].runs_scored;
    this.strikebal = this.batsman[i].balls_faced;
    this.strikestatus = this.batsman[i].how_out;
    this.strikesix = this.batsman[i].sixes_scored;
    this.strikefour = this.batsman[i].fours_scored;
  //  console.log(this.batsman[i].how_out);
    this.totalstrikerate = this.strikerun * 100 / this.strikebal;
  //  console.log(this.strikefour);

    this.strikebatsman.push({ name: this.strikeplayername, runs_scored: this.strikerun, balls_faced: this.strikebal, strikerate: this.totalstrikerate, status: this.strikestatus, four: this.strikefour, six: this.strikesix });
  }


 // console.log(this.strikebatsman);



  for (let i = 0; i < this.bowler.length; i++) {
    this.bowlername = this.bowler[i].bowler_ids.player_name;
    this.bowlerrun = this.bowler[i].runs_conceded;
    this.bowlerwicket = this.bowler[i].wickets_taken;
    this.bowleroverbowled = this.bowler[i].overs_bowled;
    this.ballbowled = this.bowler[i].balls_bowled;
    this.bowlermaidens_bowled = this.bowler[i].maidens_bowled;  
    this.bowlerno_balls = this.bowler[i].no_balls;  
    this.bowlerwides = this.bowler[i].wides;  
    this.bowlerdot_balls = this.bowler[i].dot_balls;  
  //  console.log(this.bowler[i].bowler_ids.player_name);
  
    this.econmicyrate = this.bowlerrun / this.bowleroverbowled;
    this.bowlerdata.push({name:this.bowlername,wickets:this.bowlerwicket,run:this.bowlerrun,over:this.bowleroverbowled,ball:this.ballbowled,econmyrate:this.econmicyrate,maiden:this.bowlermaidens_bowled,noball:this.bowlerno_balls,wide:   this.bowlerwides ,dotball:this.bowlerdot_balls});
    



  }
 //console.log(this.bowlerdata);
// console.log(this.econmicyrate);

//});

  //console.log(this.name);
 
   

    


  }
}
