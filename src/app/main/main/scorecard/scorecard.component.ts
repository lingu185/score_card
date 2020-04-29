import { Component, OnInit, Input,ChangeDetectorRef,SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Teamname } from './scorecard';
import { ActivatedRoute, ROUTES } from '@angular/router';//for parsing parameter in dynamically in routing
import { CommonService } from 'src/app/common.service';
import { Router, Routes, RouterLinkActive } from '@angular/router';
declare const Highcharts;
@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
 
    public innings;
    public inningslength;
    public batsman;
    public inningsname;
    public labelname;
    public result_inn;
    public inn_first;
    public inn_sec;
    public inn_three;
    public inn_four;
    public teamname1: Teamname;
    public teamname2: Teamname;
    public teamname3: Teamname;
    public teamname4: Teamname;
    public id;
    public Id;
    public labelscoreone;
    public labelwkt1;
    public labelwkt2;
    public labelwkt3
    public labelwkt4;
    public labelscoretwo;
    public lablescorethree;
    public labelscorefour;
    public commentaryData = false;
    public scoreCardData = false;
    public graphData = false;
    public slash;
    public noinnings;
    //public result_inn;
    public selectedIndex1;
    public message;
    public seriesDAta = [];
    public testData = [];
    public over = [];
    public overs = [];
    // public innings;
    // public result_inn;
    // public inningsname;
    // public teamname1;
    // public teamname2;
    // public teamname3;
    // public teamname4;
    public drpdwninido;
    public drpt
    public inning;
    public drpdwninidth;
    public drpdwninidfo;
    public description;
    public selectid = [];
    public graphid = [];
    public graphname = [];
    public battingteamid;
    public bowlingteamid;
    public batbowlid = [];
    public value;
    public selectedIndex; 
    @ViewChild('graph') element: ElementRef;
    @ViewChild('graphh') element1: ElementRef;
    //public innings;
    //public inningslength;
    // public inningsname;
    public teamname5: Teamname;
    public teamname6: Teamname;
    public teamname7: Teamname;
    public teamname8: Teamname;
    public stadium;
    public gametime
    // public id;
    // public Id;
    public queryParams;
    public routerName: any;
    data: any;
    public childdata;
    public cchilddata;
  public gamestatus
    public childdata1;
    public noinningsboard;
    navLinks = [
      { path: 'scorecard', label: 'Score Card' },
      { path: 'commentary', label: 'Commentary' },
       { path: 'graph', label: 'Graph' }
    ];
  
    constructor(private CommonService: CommonService, private route: ActivatedRoute, private router: Router,public ref:ChangeDetectorRef) { 
    
    }
    ngOnInit() {
      this.Id = this.route.snapshot.paramMap.get('id');
      this.getContactsBasedOnId(this.Id); 
      this.getsCommentoryBasedOnId(this.Id);
   
 // console.log("id1"+this.Id);
  
      this.routerName = this.route.snapshot.url[5].path;
     // console.log('routernmae',this.routerName);
  
      if (this.routerName === 'commentary') {
        //  console.log('inside commentary');
        this.scoreCardData = false;
        this.commentaryData = true;
      } else {
        this.commentaryData = false;
        this.scoreCardData = true;
      }
      if(this.routerName==='graph'){
        this.commentaryData = false;
        this.scoreCardData = false;
        this.graphData=true;
      }
      this.id = setInterval(() => {
        this.getsCommentoryBasedOnId(this.Id)
        this.getContactsBasedOnId(this.Id); 
     this. getsGraph(this.battingteamid,this.bowlingteamid,this.Id)
    //   console.log("timer call",this.Id);
       
      }, 20000)
 
    
   
  
      this.teamname1 = new Teamname();
      this.teamname2 = new Teamname();
      this.teamname3 = new Teamname();
      this.teamname4 = new Teamname();
      this.teamname5 = new Teamname();
      this.teamname6 = new Teamname();
      this.teamname7 = new Teamname();
  
      this.teamname8 = new Teamname();
     
    }
    ngOnDestroy() {
      if (this.id) {
        clearInterval(this.id);
      };
    }
 
   
  
    
    buildNavItems(routes: Routes) {
     // console.log('bulidcalled');
  
      return (routes)
        .filter(route => route.data)
        .map(({ path = '/', data }) => ({
          path: path,
          label: data.label,
          id: this.Id,
          icon: data.icon
        }));
    //  console.log('router link value');
  
    }
  
    getContactsBasedOnId(id) {
      //console.log('fuction called', id);
      this.childdata=[];
  
      this.CommonService.getContactsBasedOnId(id).subscribe(( data) => {
        this.childdata=data;
    //console.log( this.childdata.data.scorecard.data.length);
    
        data.data.scorecard.data.forEach(element => {
         this.gamestatus= element.game_status;
        this.noinningsboard=  element.results.result_text;
       this.gametime= element.game_time
       //   console.log( element.results.result_text);
          
         // console.log(element);
        this.noinnings= element.innings.length;
          this.innings = element.innings.length;
          //console.log(this.innings);
          if (this.noinnings === 0) {
            console.log("it is live match");
            this.selectedIndex = 0;
          } else if(this.noinnings === 1){
            console.log("1 live match");
            this.selectedIndex = 1;
          }else if(this.noinnings === 2){
            console.log(" 2 live match");
            this.selectedIndex = 2;
          }else{
            console.log("not live match");
            this.selectedIndex = 3;
          }
          element.VenueDetails.forEach(element1=>{
           this.stadium=element1.venue
        //    console.log(element1.venue);
            
          })
          this.inningsname = element.innings;
        //  console.log(this.inningsname.length);
          //console.log(this.innings); 
  
          for (let i = 0; i < this.inningsname.length; i++) {
            if (i === 0) {
              this.teamname1 = this.inningsname[i].battingteams.team_short_name;
              this.teamname5 = this.inningsname[i].battingteams.team_short_name;
             this.labelscoreone= this.inningsname[i].Total.runs_scored;
             this.labelwkt1=this.inningsname[i].Total.wickets;
            //  console.log(  this.inningsname[i].Total.runs_scored);
              
             // console.log(this.teamname5);
            } else if (i === 1) {
              this.teamname2 = this.inningsname[i].battingteams.team_short_name;
              this.teamname6 = this.inningsname[i].battingteams.team_short_name;
             this.labelscoretwo= this.inningsname[i].Total.runs_scored;
            this.labelwkt2= this.inningsname[i].Total.wickets;
             // console.log(  this.inningsname[i].Total.wickets);
            } else if (i === 2) {
              this.teamname3 = this.inningsname[i].battingteams.team_short_name;
              this.teamname7 = this.inningsname[i].battingteams.team_short_name;
            this.lablescorethree= this.inningsname[i].Total.runs_scored;
            this.labelwkt3=this.inningsname[i].Total.wickets;
            //  console.log(  this.inningsname[i].Total.wickets);
  
            } else if (i === 3) {
              this.teamname4 = this.inningsname[i].battingteams.team_short_name;
              this.teamname8 = this.inningsname[i].battingteams.team_short_name;
             this.labelscorefour= this.inningsname[i].Total.runs_scored;
            this.labelwkt4= this.inningsname[i].Total.wickets;
             // console.log(  this.inningsname[i].Total.wickets);
            }
  
          }
  
  
        });
        this.result_inn = data.data.scorecard.data[0].innings;
  
      
  
          data.data.scorecard.data.forEach(element => {
            this.innings = element.innings.length;
        
            this.inning = element.innings;
            this.inningsname = element.innings
           
            for (let i = 0; i < this.innings; i++) {
              this.inningsname[i].innigsid;
              this.inningsname[i].battingteams.team_short_name;
           
  //console.log('bat', this.inningsname[i].battingteam);
  //console.log('bat', this.inningsname[i].bowlingteam);
  
              this.graphid.push({ id: this.inningsname[i].innigsid, name: this.inningsname[i].battingteams.team_short_name });
           
            }
            this.battingteamid =   this.inningsname[0].battingteam;
            this.bowlingteamid= this.inningsname[0].bowlingteam;
 //console.log(  this.battingteamid);
  //console.log(this.bowlingteamid);
  
  this.getsGraph(this.battingteamid,this.bowlingteamid,this.Id);
           console.log("id3"+this.Id);
           
  
          });
      });
      this.slash="/";
    }
    isLinkActive(rla: RouterLinkActive): boolean {
      const routerLink = rla.linksWithHrefs.first;
      // console.log('is link active called');
  
      return this.router.isActive(routerLink.urlTree, false);
    }
    getUrl(label) {
      console.log('get  url called', label);
      this.scoreCardData = false;
  
      if (label === 'Score Card') {
        this.commentaryData = false;
        this.scoreCardData = true;
        var url = this.route.snapshot.url[0] + '/' + this.route.snapshot.url[1] + '/' + this.route.snapshot.url[2] + '/' + this.route.snapshot.url[3] + '/' + this.route.snapshot.url[4]+  '/scorecard';
       
        
        this.router.navigate([url]).then((e) => {
          // if (e) {
          // //  console.log('e value first');
  
          //  // console.log("Navigation is successful!");
          // } else {
          //  // console.log('e value', e);
  
          // //  console.log("Navigation has failed!");
          // }
        });
  
  
  
      } else 
        if (label === 'Commentary') {
         // console.log('commentary worked');
          var url =this.route.snapshot.url[0] + '/' + this.route.snapshot.url[1] + '/' + this.route.snapshot.url[2] + '/' + this.route.snapshot.url[3] + '/' + this.route.snapshot.url[4]+ '/commentary';
      
          this.commentaryData = true;
          this.scoreCardData = false;
          var commentoryLink = this.router.navigate([url]).then((e) => {
          //   if (e) {
          //    // console.log('e value first');
  
          //  //   console.log("Navigation is successful!");
          //   } else {
          //   //  console.log('e value', e);
  
          //     //console.log("Navigation has failed!");
          //   }
          });
        } else if (label === 'Graph') {
        //  console.log('commentary worked');
          var url = this.route.snapshot.url[0] + '/' + this.route.snapshot.url[1] + '/' + this.route.snapshot.url[2] + '/' + this.route.snapshot.url[3] + '/' + this.route.snapshot.url[4]+ '/graph';
      //    console.log('router link setting', url);

          this.commentaryData = false;
          this.scoreCardData = false;
        this.graphData=true;
          var graph = this.router.navigate([url]).then((e) => {
            if (e) {
             // console.log('e value first');
  
             // console.log("Navigation is successful!");
            } else {
            //  console.log('e value', e);
  
            //  console.log("Navigation has failed!");
            }
          });
  
        }
  
  
    }
    getsCommentoryBasedOnId(routerId) {
      this.CommonService.getsCommentoryBasedOnId(routerId).subscribe((data) => {
        
        this.inningslength = data.commentarydetails.data.length;
        //console.log( this.inningslength );
        if (  this.inningslength  === 0) {
          console.log("it is live match");
          this.selectedIndex1 = 0;
        } else if(  this.inningslength  === 1){
          console.log("1 live match");
          this.selectedIndex1 = 1;
        }else if(  this.inningslength  === 2){
          console.log(" 2 live match");
          this.selectedIndex1 = 2;
        }else{
          console.log("not live match");
          this.selectedIndex1 = 3;
        }
       this.cchilddata= data;
      // console.log(this.cchilddata);
       
      })
  
    }
  //charts source
    renderChart() {
      const options = {
        chart: {
          type: 'column',
          //renderTo: 'container'
        },
        title: {
           text: 'Manhattan'
        },
        subtitle: {
          //  text: 'Source: WorldClimate.com'
        },
        xAxis: {
          categories: this.overs,
          crosshair: true
        },
  
        yAxis: {
          min: 0,
          title: {
            text: 'Run Scored'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
  
        series: this.seriesDAta
      };
  
      Highcharts.chart(this.element.nativeElement, options);
    }
   getsGraph(battingteamid,bowlingteamid,Id) {
      const srlData = [];
      const safData = [];
      const overs = [];
    // battingteamid;
    //console.log(battingteamid);
    var id=Id;
      console.log("id4"+id);
      
      this.CommonService.getsGraph(battingteamid,bowlingteamid,Id).subscribe((data) => {
  //      console.log("id5"+Id);
  //  console.log(this.battingteamid);
//console.log(this.bowlingteamid);
    
    var batteam=this.battingteamid
    var bowling=this.bowlingteamid;
  data.combinedArray.forEach(element=>{
    element
   // console.log(element);
    
  
    
  })
  
        data.combinedArray.forEach(item => {
          item[batteam]
          item[bowling]
         
          
         
          srlData.push(item[batteam]);
          safData.push(item[bowling]);
          overs.push(item.over);
  
        });
        this.seriesDAta = [
          { name: this.teamname1, data: srlData },
          { name: this.teamname2, data: safData }
        ];
  
        this.renderChart();
  //console.log(this.teamname1);
  
  
      });
  
  
    }
    rendertChart() {
      const optionss = {
        chart: {
          type: 'column',
          //renderTo: 'container'
        },
        title: {
           text: 'Manhattan'
        },
        subtitle: {
          //  text: 'Source: WorldClimate.com'
        },
        xAxis: {
          categories: this.overs,
          crosshair: true
        },
  
        yAxis: {
          min: 0,
          title: {
            text: 'Run Scored'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
  
        series: this.seriesDAta
      };
  
      Highcharts.chart(this.element1.nativeElement, optionss);
    }
    graphOptions(value) {
      //console.log('method called',value);
      this.CommonService.getsGraphBasedOnId(value).subscribe((data) => {
        //console.log('based on id',data);
        
        
        const runsData = [];
  
        const overs = [];
  
        //    console.log(data);
  
        // console.log(data.battingFirst.total);
        data.manData.manChart.forEach(element => {
          //   console.log(element.runs);
  
          runsData.push(element.runs);
          overs.push(element.over);
  
        });
        this.seriesDAta = [
          { name: this.teamname1, data: runsData },
  
        ];
        this.rendertChart();
  
  
  
  
  
      });
  
    }
  
  
  }
  