import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SpeedrunService } from 'src/app/_services/speedrun.service';

declare var bootstrap: any;

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {

    public gameInfo: any = {};
    public gameStats: any = {};
    public error?: string;
    public gameCategories: any = [];
    public activeCategory = 0;

    constructor(public translate: TranslateService,
        private activatedRoute: ActivatedRoute,
        private speedrunService: SpeedrunService) {

        const gameUrlName = activatedRoute.snapshot.params['game'];

        this.speedrunService.getGameFromUrlName(gameUrlName).subscribe({
            next: (gameInfo: any) => {

                this.gameInfo = gameInfo.data;

                //get game categories
                this.speedrunService.getGamesCategories(this.gameInfo.id).subscribe({
                    next: (gameCategories: any) => {

                        this.gameCategories = gameCategories.data;

                    },
                    error: () => {
                        this.error = 'Jeu introuvable.';
                    }
                });

                this.speedrunService.getGameStats(this.gameInfo.id).subscribe({
                    next: (gameStats: any) => {

                        this.gameStats = gameStats.data;

                    },
                    error: () => {
                        this.error = 'Jeu introuvable.';
                    }
                })

            },
            error: () => {
                this.error = 'Jeu introuvable.';
            }
        })


    }
    ngOnInit(): void {


    }

    convertMsToTime(ms: string) {
        var duration = Number(ms);
        var milliseconds = Math.floor((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        var h = (hours < 10) ? "0" + hours : hours;
        var m = (minutes < 10) ? "0" + minutes : minutes;
        var s = (seconds < 10) ? "0" + seconds : seconds;

        return h + ":" + m + ":" + s;
    }


}


