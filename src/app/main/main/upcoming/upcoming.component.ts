import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
//   public wkt1=[];
//   public wkt2=[];
//   public upcoming;
//   public matchtype;
//   public stadium;
//   public gamedate;
//   public  responseList=[];
//   @Input('ipldata') ipldata:any;

   constructor(public commonservice:CommonService) { }

  ngOnInit() {
    //this.checkfunction();
    console.log('');
    
  }
//   carouselOptions = {
//     margin: 25,
//     nav: true,
//     navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
//     responsiveClass: true,
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
//     this.commonservice.getWidgetsInternational().subscribe(data=>{
//       this.ipldata;
//       console.log(this.ipldata);
      
//       for(let i=0;i<data.data.upcoming.length;i++){
//         data.data.upcoming[i].away_team;
//        this.gamedate= data.data.upcoming[i].game_date_string;
//        //console.log( this.gamedate);
       
//        this.matchtype= data.data.upcoming[i].description;
//        data.data.upcoming[i].description;
//        data.data.upcoming[i].venue;
//        // console.log(     data.data.upcoming[i].venue);
//         for(let k=0;k< data.data.upcoming[i].venue.length;k++){
//         this.stadium=  data.data.upcoming[i].venue[k].venue;
//        //   console.log( data.data.upcoming[i].venue[k].venue);
          
        
//       var Id=data.data.upcoming[i].fixture_id;
          
//         for(let j=0;j<  data.data.upcoming[i].away_team.length;j++){
//           data.data.upcoming[i].away_team[j].team_short_name;
//           var awayTeamName=data.data.upcoming[i].away_team[j].team_short_name;
//           var homeTeamName=data.data.upcoming[i].home_team[j].team_short_name;
         
          
//           this.wkt2.push({name:awayTeamName,id:'vs',name1:homeTeamName,Id:Id,match: this.matchtype,stadium:this.stadium,date:this.gamedate});
//         }
//     //   console.log( 'id',Id );
//   //athis.wkt2.push({Id:Id});
//        }
//       }
//     })
//    this.commonservice.getWidgetsWomens().subscribe(data=>{
//     for(let i=0;i<data.data.upcoming.length;i++){
//       data.data.upcoming[i].away_team;
//      this.gamedate= data.data.upcoming[i].game_date_string;
//      //console.log( this.gamedate);
     
//      this.matchtype= data.data.upcoming[i].description;
//      data.data.upcoming[i].description;
//      data.data.upcoming[i].venue;
//      // console.log(     data.data.upcoming[i].venue);
//       for(let k=0;k< data.data.upcoming[i].venue.length;k++){
//       this.stadium=  data.data.upcoming[i].venue[k].venue;
//      //   console.log( data.data.upcoming[i].venue[k].venue);
        
      
//     var Id=data.data.upcoming[i].fixture_id;
        
//       for(let j=0;j<  data.data.upcoming[i].away_team.length;j++){
//         data.data.upcoming[i].away_team[j].team_short_name;
//         var awayTeamName=data.data.upcoming[i].away_team[j].team_short_name;
//         var homeTeamName=data.data.upcoming[i].home_team[j].team_short_name;
       
        
//         this.wkt2.push({name:awayTeamName,id:'vs',name1:homeTeamName,Id:Id,match: this.matchtype,stadium:this.stadium,date:this.gamedate});
//       }
//   //   console.log( 'id',Id );
// //athis.wkt2.push({Id:Id});
//      }
//     }
 
//    })
//     this.commonservice.getWidget().subscribe(data=>{
//      // console.log('data getwidget',data.data.results);
    
//     // console.log( data.data.results.length);
//     for(let i=0;i<data.data.upcoming.length;i++){
//       data.data.upcoming[i].away_team;
//      this.gamedate= data.data.upcoming[i].game_date_string;
//      //console.log( this.gamedate);
     
//      this.matchtype= data.data.upcoming[i].description;
//      data.data.upcoming[i].description;
//      data.data.upcoming[i].venue;
//      // console.log(     data.data.upcoming[i].venue);
//       for(let k=0;k< data.data.upcoming[i].venue.length;k++){
//       this.stadium=  data.data.upcoming[i].venue[k].venue;
//      //   console.log( data.data.upcoming[i].venue[k].venue);
        
      
//     var Id=data.data.upcoming[i].fixture_id;
        
//       for(let j=0;j<  data.data.upcoming[i].away_team.length;j++){
//         data.data.upcoming[i].away_team[j].team_short_name;
//         var awayTeamName=data.data.upcoming[i].away_team[j].team_short_name;
//         var homeTeamName=data.data.upcoming[i].home_team[j].team_short_name;
       
        
//         this.wkt2.push({name:awayTeamName,id:'vs',name1:homeTeamName,Id:Id,match: this.matchtype,stadium:this.stadium,date:this.gamedate});
//       }
//   //   console.log( 'id',Id );
// //athis.wkt2.push({Id:Id});
//      }
//     }
//     //console.log('final wkt2 answwer',this.wkt2);

    
//     });

//    // console.log(this.wkt2);

//   }


// // commonUrl(data){
// //   this.commonservice.getContactsBasedOnId(data.Id).subscribe(data=>{
// //     data
// //     console.log( 'Scorecardupcoming',data);
// //     this.responseList.push({Scorecardupcoming:data});
// //   });

// // this.commonservice.getsCommentoryBasedOnId(data.Id).subscribe(element=>{
// // //  console.log('commentryupcoming',element);
// //   this.responseList.push({commentryupcoming:element});
// // });
// // this.commonservice.getsGraphBasedOnId(data.Id).subscribe(element1=>{
// //   element1;
// //   console.log('graphupcoming',element1);
// //   this.responseList.push({graphupcoming:element1});

// // });
// // this.commonservice.getCurrentBasedOnId(data.Id).subscribe(element2=>{
// //   element2
// //   console.log('graphcurrent',element2);
// //   this.responseList.push({graphupcoming:element2});

// // })
// // console.log( this.responseList);

// // }
}
