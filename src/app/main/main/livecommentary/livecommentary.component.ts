import { Component, OnInit, ViewChild ,EventEmitter, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Maticon } from './livecommentary';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-livecommentary',
  templateUrl: './livecommentary.component.html',
  styleUrls: ['./livecommentary.component.css']
})
export class LivecommentaryComponent implements OnInit {
  @Input('Id')Id:string;
  public innings;
  public message;
  public inningslength;
  public inningslengt;
  public messagelength;
  public type;
  public icon: Maticon;
  public iconn = [];
  public iconntype;
  public newtype;
  public comarray = []
  public resulticon;
  public resulttext;
  public id;
  public commentarylength;

  dataSource;
  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;
  constructor(private CommonService: CommonService,private activatedRoute:ActivatedRoute) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
     this.activatedRoute.queryParams.subscribe(params => {
      const Id = params['id'];
    });
    this.getCurrentBasedOnId(this.Id); 
       this.id = setInterval(() => {
        this.getCurrentBasedOnId(this.Id); 
       }, 20000)
    //this.getsCommentoryBasedOnId(this.Id);
  
    this.icon = new Maticon();
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
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
 
}
ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  };
}

  displayedColumns: string[] = ['message',];


  getCurrentBasedOnId(id) {
     this.comarray=[];

   // console.log('CurrentBased');
    
    this.CommonService.getCurrentBasedOnId(id).subscribe((data) => {
      // data

      // console.log(data.commentary.commentarydetails.data.length);
     this.commentarylength= data.commentary.length

     for (let j = 0; j < data.commentary.length; j++) {
      this.newtype = data.commentary[j].type;
//console.log( data.commentary.length);

      this.resulttext = data.commentary[j].message_text;
     // console.log( this.resulttext);
      
      for (let i = 0; i < this.iconn.length; i++) {
        this.iconntype = this.iconn[i].no;
        this.iconn[i].no;

          if ( this.newtype === this.iconntype) {
            this.resulticon = this.iconn[i].icon;
            this.dataSource = new MatTableDataSource(this.comarray);
            this.dataSource.paginator = this.paginator;
            
          //  console.log(this.resulttext.length);
            }
          
        }
        this.comarray.push({ icon: this.resulticon,text:this.resulttext});
     
      }
 
    })
 
    this.iconn.push({ no: 'one', icon: 1 },  { no: 'three', icon: 3 }, { no: 'four', icon: 4 }, { no: 'six', icon: 6 },{ no: 'leg_bye', icon: 'LB' }, { no: 'comment', icon: '!' }, { no: 'normal', icon: '0' }, { no: 'end of over', icon: 'E' }, { no: 'catch', icon: 'C' }, { no: 'wide', icon: 'WD' }, { no: 'wicket', icon: 'W' });
 
    
    // console.log(this.comarray);
    // console.log( this.comarray.length);
   }
}
