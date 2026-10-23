import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { PortfolioComponent } from './_components/portfolio/portfolio.component';
import { ProjectComponent } from './_components/project/project.component';

export const appRoutes: Routes = [{
  path: '', component: HomeComponent, data : {animation : 'isFirst'}
},
{
  path: 'project/:key', component: ProjectComponent, data : {animation : 'isLast'}
},
{
  path: 'portfolio', component: PortfolioComponent
},
{
  path: 'threeJS',
  loadChildren: () => import('./modules/threejs/threejs.module').then(m => m.ThreePageModule)
},
{
  path: '**', redirectTo: ''
}];
