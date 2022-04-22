import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ProjectComponent } from './_components/project/project.component';

const routes: Routes = [{
  path: '', component: HomeComponent, data : {animation : 'isFirst'}
},
{
  path: 'project/:key', component: ProjectComponent, data : {animation : 'isLast'}
},
{
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
