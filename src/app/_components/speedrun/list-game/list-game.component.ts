import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from 'src/app/_services/api/game.service';

declare var bootstrap: any;

@Component({
    selector: 'speedrun-game',
    templateUrl: './list-game.component.html',
    styleUrls: ['./list-game.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListGameComponent implements OnInit {

    public games: any[] = [];

    constructor(public translate: TranslateService,
        private gameService: GameService) {

        this.gameService.getGames()
            .subscribe((games : any) => {
                this.games = games.data;
                console.log(games)
            });

    }
    ngOnInit(): void {


    }



}
