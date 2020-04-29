import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';


declare const Highcharts;
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public seriesDAta = [];
  public testData = [];
  public over = [];
  public overs = [];
  public innings;
  public result_inn;
  public inningsname;
  public teamname1;
  public teamname2;
  public teamname3;
  public teamname4;
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
  public Id;

  @ViewChild('graph') element: ElementRef;
  @ViewChild('graphh') element1: ElementRef;
  constructor(private CommonService: CommonService, public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    
    this.getContacts();
    // var id = setInterval(() => {
     this.getsGraph(this.battingteamid,this.bowlingteamid,this.Id); 
     // this.getContacts(); i cmment
   
      
   // }, 20000)



  }


 
   getContacts() {
    this.CommonService.getContacts().subscribe((data) => {
     
      data.data.scorecard.data.forEach(element => {
        this.innings = element.innings.length;
        this.description = element.description;
      });
      //console.log(   this.innings);
      this.CommonService.getContacts().subscribe((data) => {
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


       
console.log(  this.battingteamid);
console.log(this.bowlingteamid);

this.getsGraph(this.battingteamid,this.bowlingteamid,this.value);
        // console.log(this.battingteamid);
         

        });
      });
     
    });

  }
  

  renderChart() {
    const options = {
      chart: {
        type: 'column',
        //renderTo: 'container'
      },
      title: {
        // text: 'Monthly Average Rainfall'
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
    
      

    
    this.CommonService.getsGraph(battingteamid,bowlingteamid,Id).subscribe((data) => {
  console.log(this.battingteamid);
  console.log(this.bowlingteamid);
  
  var batteam=2
  var bowling=5;
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
        // text: 'Monthly Average Rainfall'
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
