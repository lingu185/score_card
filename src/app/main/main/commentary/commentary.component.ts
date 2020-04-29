import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Teamname } from './commentary';
import { ActivatedRoute } from '@angular/router';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent implements OnInit {

  public result_inn;
  public message;
  public innings;
  public inningslength;
  public inningsname;
  public teamname5: Teamname;
  public teamname6: Teamname;
  public teamname7: Teamname;
  public teamname8: Teamname;
  public id;
  public Id;
  public cchilddata;
  public queryParams;
  data: any;

  constructor(private CommonService: CommonService,private route: ActivatedRoute) {
   
 
   }
 

  ngOnInit() {
    //console.log('router checking');
    
    this.route.queryParams.subscribe(params=>{
      console.log('router data',params['id']);
      this.id=params['id'];
    //this.getContactsBasedOnId(this.id);
   // this.getsCommentoryBasedOnId(this.id);
    //this.getContactsBasedOnId(this.id);
    this.queryParams=this.id;
      
    });

    this.Id=this.id;   
    console.log('Id value for childe',this.Id);
    
    this.teamname5 = new Teamname();
    this.teamname6 = new Teamname();
    this.teamname7 = new Teamname();

    this.teamname8 = new Teamname();
  }
  // getsCommentoryBasedOnId(routerId) {

  //   this.CommonService.getsCommentoryBasedOnId(routerId).subscribe((data) => {
  //    this.cchilddata= data;
  //    console.log(this.cchilddata);
     
  //     // this.result_inn = data.data.scorecard.data[0].innings;
  //     this.inningslength = data.commentarydetails.data.length;
      

  //   })
  // }
//   getContactsBasedOnId(routerId) {
// console.log('routerId',routerId);

//     this.CommonService.getContactsBasedOnId(routerId).subscribe((data) => {
//       console.log('get contacts data',data);
      
//       this.result_inn = data.data.scorecard.data[0].innings;

//       //console.log(this.result_inn.length);
//       //console.log(data.data.scorecard.data[0].innings);

//       data.data.scorecard.data.forEach(element => {
//         this.innings = element.innings.length;
//         //console.log(this.innings);

//         this.inningsname = element.innings
//         //console.log(this.inningsname);
//         //console.log(this.innings); 

//         for (let i = 0; i < this.inningsname.length; i++) {
//           if (i == 0) {
//             this.teamname5 = this.inningsname[i].battingteams.team_short_name;
//           } else if (i == 1) {
//             this.teamname6 = this.inningsname[i].battingteams.team_short_name;
//           } else if (i == 2) {
//             this.teamname7 = this.inningsname[i].battingteams.team_short_name;
//           } else if (i == 3) {
//             this.teamname8 = this.inningsname[i].battingteams.team_short_name;
//           }
//         }


//       });
//     });
//}
}
