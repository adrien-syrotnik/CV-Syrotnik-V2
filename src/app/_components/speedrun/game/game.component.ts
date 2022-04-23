import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { GameService } from 'src/app/_services/api/game.service';
import { AddScoreModalComponent } from './add-score-modal/add-score-modal.component';

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
        private gameService: GameService,
        private modalService: NgbModal) {

        const gameUrlName = activatedRoute.snapshot.params['game'];

        this.gameService.getGameFromUrlName(gameUrlName).subscribe({
            next: (gameInfo: any) => {

                this.gameInfo = gameInfo.data;

                //get game categories
                this.gameService.getGamesCategories(this.gameInfo.id).subscribe({
                    next: (gameCategories: any) => {

                        this.gameCategories = gameCategories.data;

                    },
                    error: error => {
                        this.error = error.error.message;
                    }
                });

                this.gameService.getGameStats(this.gameInfo.id).subscribe({
                    next: (gameStats: any) => {

                        this.gameStats = gameStats.data;

                    },
                    error: error => {
                        this.error = error.error.message;
                    }
                })

            },
            error: error => {
                this.error = error.error.message;
            }
        })


    }
    ngOnInit(): void {


    }

    openAddScoreModal() {
        const modalRef = this.modalService.open(AddScoreModalComponent);
        (modalRef.componentInstance as AddScoreModalComponent).gameInfo = this.gameInfo;
        (modalRef.componentInstance as AddScoreModalComponent).gameCategories = this.gameCategories;
        (modalRef.componentInstance as AddScoreModalComponent).category = this.gameCategories[this.activeCategory];
    }

    convertMsToTime(ms:string){
        var duration = Number(ms);
        console.log(ms);
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


