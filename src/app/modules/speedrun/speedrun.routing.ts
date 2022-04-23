import { Routes } from '@angular/router';
import { GameComponent } from 'src/app/_components/speedrun/game/game.component';
import { ListGameComponent } from 'src/app/_components/speedrun/list-game/list-game.component';
import { SpeedrunComponent } from 'src/app/_components/speedrun/speedrun.component';

export const SpeedrunRoutes: Routes = [
    {
        path: '', component: SpeedrunComponent,
        children: [
            { path: '', component: ListGameComponent, pathMatch: "full" },
            {
                path: ':game', component: GameComponent
            }
        ]
    }
];
