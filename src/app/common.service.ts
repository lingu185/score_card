import { Injectable } from '@angular/core';
import {Response,Http} from '@angular/http';
import{catchError} from 'rxjs/operators';
import{Observable} from 'rxjs';
import{map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apicontact:string='https://livescore.sportstarlive.com/api/cricket/scorecard/ipl-2019/44298/rajasthan-royals-vs-royal-challengers-bangalore';
  apicurrent:string='https://livescore.sportstarlive.com/api/cricket/current/sri-lanka-women-v-england-women-odi-series-2019/44298/sri-lanka-women-vs-england-women';
  apicommentary:string='https://livescore.sportstarlive.com/api/cricket/commentary/windies-v-england-test-series-2019/44298/windies-vs-england';
  apigrapht20:string='https://livescore.sportstarlive.com/api/cricket/matchstats/44036';

 constructor(private http:Http) { }
  getContacts()
{
  return  this.http.get(this.apicontact,)
  .pipe(map((response:Response)=>response.json()),
  catchError((error:any)=>{
    return Observable.throw(error);
  }));
}
getCurrent()
{
  return  this.http.get(this.apicurrent)
  .pipe(map((response:Response)=>response.json()),
  catchError((error:any)=>{
    return Observable.throw(error);
  }));
}
getsCommentory()
{
  return this.http.get(this.apicommentary)
  .pipe(map((response:Response)=>response.json()),
  catchError((error:any)=>{
return Observable.throw(error);
  })
  )}
  getsGraph(battingteamid,bowlingteamid,id:string)
  {
    return this.http.get('https://livescore.sportstarlive.com/api/cricket/matchstats'+'/'+id,)
    .pipe(map((response:Response)=>response.json()),
    catchError((error:any)=>{
  return Observable.throw(error);
    })
    )}
   
      getsGraphBasedOnId(id:string){
        return this.http.get('https://livescore.sportstarlive.com/api/cricket/matchstats'+'/'+id,)
        .pipe(map((response:Response)=>response.json()),
        catchError((error:any)=>{
          return Observable.throw(error);
        })
      )}
    

        getContactsBasedOnId(id:string) {
         //console.log('sevice called');
          
          return this.http.get('https://livescore.sportstarlive.com/api/cricket/scorecard/windies-v-england-test-series-2019/'+id+'/windies-vs-england')
            .pipe(map((response: Response) => response.json()),
              catchError((error: any) => {
                return Observable.throw(error);
              }));
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        getCurrentBasedOnId(id:string) {
          return this.http.get('https://livescore.sportstarlive.com/api/cricket/current/sri-lanka-women-v-england-women-odi-series-2019/'+id+'/sri-lanka-women-vs-england-women')
            .pipe(map((response: Response) => response.json()),
              catchError((error: any) => {
                return Observable.throw(error);
              }));
        }
        getsCommentoryBasedOnId(id:string) {
          return this.http.get('https://livescore.sportstarlive.com/api/cricket/commentary/windies-v-england-test-series-2019/'+id+'/windies-vs-england')
            .pipe(map((response: Response) => response.json()),
              catchError((error: any) => {
                return Observable.throw(error);
              })
            );
        }
        getWidget(){
          return this.http.get('https://livescore.sportstarlive.com/api/cricket/fixtures/C1i/widget')
              .pipe(map((response: Response) => response.json()),
                catchError((error: any) => {
                  return Observable.throw(error);
                }));
          
          }
      
       getWidgetsInternational(ipllength){
         return this.http.get('https://livescore.sportstarlive.com/api/cricket/fixtures/C1m/widget')
         .pipe(map((response:Response)=>response.json()),
         catchError((error:any)=>{
           return Observable.throw(error);
         }))
       }
       getWidgetsWomens(ipllength,internationallength){
        return this.http.get('https://livescore.sportstarlive.com/api/cricket/fixtures/C1w/widget')
        .pipe(map((response:Response)=>response.json()),
        catchError((error:any)=>{
          return Observable.throw(error);
        }))
      }
      
}
