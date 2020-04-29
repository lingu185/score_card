import { Component, OnInit ,ViewChild, ChangeDetectionStrategy,AfterViewInit,ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CommonService } from 'src/app/common.service';

import { Router, Routes ,ActivatedRoute,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {
  isViewInitialized = false;
  @ViewChild('container2', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;   
  public innings;
  navLinks = [
    { path: 'scorecard', label: 'Score Card' },
    { path: 'commentary', label: 'Commentary' },
    { path: 'graph', label: 'Graph' }
  ];
  dataFromChild;
  eventFromChild(data) {
    this.dataFromChild = data;
  }


  constructor(private componentFactoryResolver: ComponentFactoryResolver,private CommonService:CommonService,private router:Router,    private route: ActivatedRoute,
    ) {
   // this.navLinks = this.buildNavItems(this.router.config);
  }

  ngOnInit() {
   // console.log('this data from child',this.dataFromChild);
    
    //this.getContacts();
  }
  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }
  displayedColumns: string[] = ['message',];
  getContacts(){
    this.CommonService.getContacts().subscribe((data)=>{
    //  console.log(data);
      data.data.scorecard.data.forEach(element => {
        this.innings = element.innings
        //console.log(this.innings)
      });
     
    });
  
}
isLinkActive(rla: RouterLinkActive): boolean {
  const routerLink = rla.linksWithHrefs.first;
  
  return this.router.isActive(routerLink.urlTree, false);
}
}
