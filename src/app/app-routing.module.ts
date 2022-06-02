import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUs} from './aboutus/app.component';



const routes: Routes = [

  { path: 'about', component: AboutUs },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
