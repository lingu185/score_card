import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main/main.module';
import { AppComponent } from './app.component';
const routes: Routes = [
      { path: '', loadChildren: './main/main/main.module#MainModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
