import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from 'src/app/_services/api/game.service';


@Component({
    selector: 'game-category',
    templateUrl: './game-category.component.html',
    styleUrls: ['./game-category.component.scss']
})
export class GameCategoryComponent implements OnInit {

    @Input() public gameInfo: any;

    constructor(private gameService: GameService) {

        

    }
    ngOnInit(): void {


    }



}
