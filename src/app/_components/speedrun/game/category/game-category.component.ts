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
    @Input() public categoryId!: string;

    public scores : any[] = [];

    constructor(private gameService: GameService) {

    
    }
    ngOnInit(): void {

        this.gameService.getGameCategoryScores(this.gameInfo.id, this.categoryId).subscribe((data: any) => {
            this.scores = data.data;
        });
    }



}
