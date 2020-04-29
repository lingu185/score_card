import { Component, OnInit,ViewChild,ViewContainerRef} from '@angular/core';
import { Router, Routes ,ActivatedRoute,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})



export class CommonComponent implements OnInit {
  public id;
  public Id;
  public queryParams;
  data: any;
  activeLinkIndex = -1;
  
isViewInitialized = false;
@ViewChild('container2', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
@ViewChild(RouterLinkActive) rla: RouterLinkActive;
  
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('router checking');
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.path === '.' + this.router.url));
    });
    
    // this.route.queryParams.subscribe(params=>{
    //   console.log('router data',params['id']);
    //   this.id=params['id'];
    // //this.getContactsBasedOnId(this.id);
   
    // this.queryParams=this.id;
      
    // });
    this.Id=this.route.snapshot.paramMap.get('id');
console.log('id valueee',this.Id); 
    console.log('Id value for childe',this.Id);
  }

  navLinks = [
    { path: 'scorecard', label: 'Score Card',index:0 },
    { path: 'commentary', label: 'Commentary',index:1 },
    { path: 'graph', label: 'Graph',index:2 }
  ];

 
  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }
isLinkActive(rla: RouterLinkActive): boolean {
  const routerLink = rla.linksWithHrefs.first;
 return this.router.isActive(routerLink.urlTree, false);
}

scoreCardClick(){
  console.log('called');
  this.router.navigate(['scorecard'], { queryParams: { id:this.Id } }).then((e) => {
    if (e) {
      console.log('e value first');

      console.log("Navigation is successful!");
    } else {
      console.log('e value', e);

      console.log("Navigation has failed!");
    }
  });
  
}
}
