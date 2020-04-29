import { Component, OnInit ,Input} from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Topplayers, Topbowlers, Totalscore, Firstinningshead, livematch } from './livescore';
import { ActivatedRoute } from '@angular/router';
declare const Highcharts;
@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.css']
})
export class LivescoreComponent implements OnInit {
  @Input('Id') Id: string;
  @Input('childdata') childdata:any;
  public topplayer: Topplayers;
  public topbowler: Topbowlers;
  public totalscore: Totalscore;
  public firstinningshead: Firstinningshead;
  public firstinningsshortname;
  public resulttext;
  public inningstotal;
  public inningslength;
  public lastinn
  public length;
  public lengt
  public innings;
  public totalrun;
  public totalwicket;
  public totalovers;
  public tosstext;
  public lengthh;
  public runrate;
  public topbatsmanfirst;
  public topbatsmansec;
  public hometeam;
  public awayteam;
  public frhometeam;
  public frawayteam;
  public frhomename;
  public frawayname;
  public topbowlname;
  public topbowlsecname;
  public topsecplayername;
  public player;
  public onstrike;
  public inning;
  public len;
  public inningsbowl;
  public inningsbowlname;
  public inningsbowlrun;
  public inningsbowlball;
  public nonstrike;
  public bowlonstrike;
  public bowlname;
  public bowlrun;
  public bowlovr;
  public batsmanlength;
  public thisbowler;
  public iconn=[];
  public gamestatus;
  public id;
  public playerlivescore=[];
  public liverunrate;
public main;
public battingteamid;
public bowlingteamid;
public bowlerlength;
  data:any;
  public currentdata;
 

  public queryParams;

  public livematch: livematch;
  constructor(private CommonService: CommonService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // setInterval(() => {
   // this.getContactsBasedOnId(this.id);
    this.topplayer = new Topplayers();
    this.topbowler = new Topbowlers();
    this.totalscore = new Totalscore();
    this.firstinningshead = new Firstinningshead();
    this.livematch = new livematch();
   
    
  //  console.log('activated routerd in fourth componernt',this.Id);
      
    this.activatedRoute.queryParams.subscribe(params => {
      const Id = params['id'];
     // console.log('Id', Id
//);
    });
  
    this.id = setInterval(() => {
      this.getContactsBasedOnId(this.Id); 
      this.getCurrentBasedOnId(this.Id)
    },20000)
  
  

    this.getCurrentBasedOnId(this.Id);
   this. getContactsBasedOnId(this.Id);
  
  }
  
  getCurrentBasedOnId(id) {
    this.childdata;
  //  console.log(this.childdata);  
    this.CommonService.getCurrentBasedOnId(id).subscribe((data) => {
      this.currentdata=data
    //  console.log(data.batsmans.length);
    this.iconn.push({ no: 'one', icon: 1 },  { no: 'three', icon: 3 }, { no: 'four', icon: 4 }, { no: 'six', icon: 6 },{ no: 'leg_bye', icon: 'LB' }, { no: 'comment', icon: ',,' }, { no: 'normal', icon: '0' }, { no: 'end of over', icon: 'E' }, { no: 'catch', icon: 'C' }, { no: 'wide', icon: 'WD' }, { no: 'wicket', icon: 'W' });
//console.log(data.bowlers.length);

      this.batsmanlength = data.batsmans.length;
      this.bowlerlength = data.bowlers.length;
   //   console.log( this.bowlerlength );
      for(let i=0;i<this.bowlerlength;i++){
        if(i===0){
        this.bowlname = data.bowlers[i].name;
     //   console.log( this.bowlname );
        
        this.bowlrun =   data.bowlers[i].runs;
     //   console.log(    this.bowlrun );

        this.bowlovr =  data.bowlers[i].overs;
     //   console.log(   this.bowlovr );

        this.thisbowler= data.bowlers[i].thisover.runs;
//  / console.log(  this.thisbowler);
  
      }
    }

       
    
// // may be useit
//     //   this.bowlname = data.bowlers[0].name;
//     //   this.bowlrun = data.bowlers[0].runs;  
//     //   this.bowlovr = data.bowlers[0].overs;
//     //  this.thisbowler= data.bowlers[0].thisover.runs;
//     //console.log(this.thisbowler.length);
    
    
//     }
  
  
      for (let i = 0; i < this.batsmanlength; i++) {
        if (i === 0) {
          this.livematch.liveplayernameone = data.batsmans[i].name;
          this.livematch.liveplayeronerun = data.batsmans[i].runs;
          this.livematch.liveplayeronebal = data.batsmans[i].balls;
    //console.log(  this.livematch.liveplayernameone );
    
        }
        if (i === 1) {
          this.livematch.liveplayernametwo = data.batsmans[i].name;
          this.livematch.liveplayertworun= data.batsmans[i].runs;
          this.livematch.liveplayertwobal = data.batsmans[i].balls
      //console.log( this.livematch.liveplayernametwo );
       
        }
      }

    
        var srlData=data.partnership.player1_runs;
        var safData=data.partnership.player2_runs;
       // console.log('srl',srlData);
       // console.log(safData);
       
      
      
   
      // this.seriesDAta = [
      //   { name: this.teamname1, data: srlData },
      //   { name: this.teamname2, data: safData }
      // ];

      // this.renderChart();






 
      
    //   Highcharts.chart('container1', {
    //     chart: {
    //         type: 'pie'
    //     },
    //     title: {
    //         text: 'PARTNERSHIP'
    //     },
       
    //     plotOptions: {
    //      pie: {
    //           innerSize: 220,
         
    //         },
    //         series: {
    //             dataLabels: {
    //                 enabled: false,
    //                 format: '{point.name}: {point.y:.1f}%'
    //             }, 
    //       },
    //     },
    
    //     tooltip: {
    //         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    //         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    //     },
    
    //     series: [
    //         {
    //             name: "Browsers",
    //             colorByPoint: true,
    //             data: [
    //                 {
                       
    //                     y:safData,
                    
    //                 },
    //                 {
                       
    //                     y: srlData,
                     
    //                 },
                 
                    
    //             ]
    //         }
    //     ],
      
    // });
    
      
      
})

  }
  getContactsBasedOnId(id) {
   
    this.CommonService.getContactsBasedOnId(id).subscribe((data) => {
      data.data.scorecard.data.game_status;
      
      
      data.data.scorecard.data.forEach(element => {
        this.inningslength = element.innings.length;
        this.inning = element.innings;
        this.len = this.inning.length - 1;
this.gamestatus=element.game_status;


        this.player = element.players;
     


      });


      data.data.scorecard.data.forEach(element => {  
        this.resulttext = element.results.result_text;
        this.tosstext = element.toss.toss_text;


      });
      data.data.scorecard.data.forEach(element => {
        this.inningstotal = element.innings;

        // for(let i=0;i<this.inningstotal.length;i++){

        // }
   
        
       
        this.length = element.innings.length - 1;
        this.lengt = element.innings.length;
       
        for (let i = 0; i < this.lengt; i++) {
          if (i === this.length) {
            this.totalscore.runs_scored = this.inningstotal[i].Total.runs_scored;
            this.totalscore.overs = this.inningstotal[i].Total.overs;
            this.totalscore.wickets = this.inningstotal[i].Total.wickets;
            this.firstinningsshortname = this.inningstotal[i].battingteams.team_short_name;
           this.battingteamid= this.inningstotal[i].battingteam;
          
           // console.log( this.inningstotal[i].battingteam);
            
this.liverunrate=this.totalscore.runs_scored/this.totalscore.overs
            
          };
         
          this.firstinningshead.runs_scored = this.inningstotal[0].Total.runs_scored;
          this.firstinningshead.wickets = this.inningstotal[0].Total.wickets;
          this.firstinningshead.overs = this.inningstotal[0].Total.overs;
          this.firstinningshead.team_short_name = this.inningstotal[0].battingteams.team_short_name;
         this.bowlingteamid= this.inningstotal[0].battingteam;
         // console.log('index',   this.inningstotal[0].battingteam);
          
         

          this.runrate = this.firstinningshead.runs_scored / this.firstinningshead.overs;

        };

      });
      data.data.scorecard.data.forEach(element => {
        this.totalscore.toss_text = element.toss.toss_text;
        this.totalscore.result_text = element.results.result_text;
      });
      data.data.summary.batsman[0];
      data.data.summary.bowlers[0];

      
      this.livematch.totalrunfirstplayer = data.data.summary.batsman[0].runs_scored;
      this.livematch.totalfirstballplayer = data.data.summary.batsman[0].balls_faced;
      this.livematch.totalfirstplayerid = data.data.summary.batsman[0].batsman_id;
      this.livematch.totalrunsecplayer = data.data.summary.batsman[1].runs_scored;
      this.livematch.totalsecballplayer = data.data.summary.batsman[1].balls_faced;
      this.livematch.totalsecplayerid = data.data.summary.batsman[1].batsman_id;
      
      this.livematch.topbowlerruncon = data.data.summary.bowlers[0].runs_conceded;
      this.livematch.topbowlerwkttaken = data.data.summary.bowlers[0].wickets_taken;
      this.livematch.topbowlerid = data.data.summary.bowlers[0].bowler_id;

      this.livematch.topbowlsecrun = data.data.summary.bowlers[1].runs_conceded;
      this.livematch.topbowlsecwkt = data.data.summary.bowlers[1].wickets_taken;
      this.livematch.topbowlsecid = data.data.summary.bowlers[1].bowler_id;
     

      this.hometeam = this.player[0].playerslist;
      this.awayteam = this.player[1].playerslist;
      for (let j = 0; j < this.hometeam.length; j++) {
        this.frhometeam = this.hometeam[j].player_id;
        this.frawayteam = this.awayteam[j].player_id;
        this.frhomename = this.hometeam[j].player_ids.player_name;
        this.frawayname = this.awayteam[j].player_ids.player_name;
       

        if (this.livematch.totalfirstplayerid === this.frawayteam) {
          this.topbatsmanfirst = this.frawayname;
         
        } else if (this.livematch.totalfirstplayerid === this.frhometeam) {
          this.topbatsmanfirst = this.frhomename;
        
        }

        if (this.livematch.totalsecplayerid === this.frawayteam) {

          //   console.log(this.livematch.totalsecplayerid);
          this.topsecplayername = this.frawayname;
          //  console.log('hiu');

          //   console.log(this.topsecplayername);

        } else if (this.livematch.totalsecplayerid === this.frhometeam) {
          //  console.log('hiu');

          this.topsecplayername = this.frhomename;
          //   console.log( this.topsecplayername);

        }

        if (this.livematch.topbowlerid === this.frawayteam) {
          //  console.log('hiu');
          this.topbowlsecname = this.frawayname;
          // console.log(this.frawayname);
        } else if (this.livematch.topbowlerid === this.frhometeam) {
          //console.log('hiu');
          this.topbowlsecname = this.frhomename;
          //  console.log(this.topbowlname);

        }  if (this.livematch.topbowlsecid === this.frhometeam) {
          // console.log('hiu');
          this.topbowlname = this.frhomename;
        //   console.log(this.topbowlsecname);

        }  if (this.livematch.topbowlsecid === this.frawayteam) {
          //console.log('hiu');

          this.topbowlname = this.frawayname;
       //   console.log(this.topbowlsecname);

        }
      }



    });

  };
}
