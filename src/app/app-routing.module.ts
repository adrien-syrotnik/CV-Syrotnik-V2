import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { ProjectComponent } from './_components/project/project.component';
import { GameComponent } from './_components/speedrun/game/game.component';
import { SpeedrunComponent } from './_components/speedrun/speedrun.component';

const routes: Routes = [{
  path: '', component: HomeComponent, data : {animation : 'isFirst'}
},
{
  path: 'project/:key', component: ProjectComponent, data : {animation : 'isLast'}
},
{
  path: 'speedrun', component: SpeedrunComponent 
},
{
  path: 'speedrun/:game', component: GameComponent
},
{
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
