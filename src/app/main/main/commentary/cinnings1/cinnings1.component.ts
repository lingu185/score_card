import { Component, OnInit,EventEmitter, Input, SimpleChanges } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
@Component({
  selector: 'app-cinnings1',
  templateUrl: './cinnings1.component.html',
  styleUrls: ['./cinnings1.component.css']
})
export class Cinnings1Component implements OnInit {

  @Input('Id') Id: string;
  @Input('cchilddata') cchilddata:any;

  constructor(private CommonService: CommonService, private activatedRoute: ActivatedRoute) { }
  public innings;
  public message;
  public fcom;
  public facom;
  public scom;
  public sacom;
  public iconn = [];
  public array = [];
  public iconntype;
  public fcomtotal;
  public mainicon
  public messagetext;
  public id;

  dataSource;
  displayedColumns: string[] = ['message',];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public messagetxt;
  public overs;
  opts: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;

  ngOnInit() {


   // console.log('activated routerd in first component', this.Id);

    this.getsCommentoryBasedOnId();
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    this.getsCommentoryBasedOnId();
  }
  
  getsCommentoryBasedOnId() {
    this.cchilddata;
    this.array=[];
   

      this.innings = this.cchilddata.commentarydetails.data
      this.iconn.push({ no: 'one', icon: 1 }, { no: 'two', icon: 2 }, { no: 'three', icon: 3 }, { no: 'four', icon: 4 }, { no: 'six', icon: 6 }, { no: 'leg_bye', icon: 'LB' }, { no: 'comment', icon: '!' }, { no: 'normal', icon: '0' }, { no: 'end of over', icon: 'E' }, { no: 'catch', icon: 'C' }, { no: 'wide', icon: 'WD' }, { no: 'wicket', icon: 'W' });
      //console.log(   this.iconn);
      this.dataSource = new MatTableDataSource(this.array)
  
      for (let i = 0; i < this.innings.length; i++) {

        if (i === 0) {
          this.fcom = this.innings[i].messages;

          for (let j = 0; j < this.fcom.length; j++) {
            this.fcomtotal = this.fcom[j].type;
            this.messagetext = this.fcom[j].message_text;
            this.overs = this.fcom[j].over_num;
            //console.log(this.fcomtotal);

            for (let k = 0; k < this.iconn.length; k++) {

              this.iconntype = this.iconn[k].no;
              if (this.fcomtotal === this.iconntype) {
                this.mainicon = this.iconn[k].icon
              
              }
            }
            this.array.push({ icon: this.mainicon, text: this.messagetext, over: this.overs });
            
          }
    
        }
       
      
       
      }

  }
}
