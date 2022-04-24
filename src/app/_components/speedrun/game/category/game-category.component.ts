import { Component, EventEmitter, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/api/game.service';


@Component({
    selector: 'game-category',
    templateUrl: './game-category.component.html',
    styleUrls: ['./game-category.component.scss']
})
export class GameCategoryComponent implements OnInit, OnDestroy {

    @Input() public gameInfo: any;
    @Input() public categoryId!: string;
    @Input() public emitRefresh! : EventEmitter<any>;

    private sub! : Subscription;

    public scores : any[] = [];

    constructor(private gameService: GameService) {

        
    
    }
    ngOnInit(): void {

        this.sub = this.emitRefresh.subscribe(() => {
            this.getScores();
        })
        this.getScores();
        
    }

    getScores() {
        this.gameService.getGameCategoryScores(this.gameInfo.id, this.categoryId).subscribe((data: any) => {
            this.scores = data.data;
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }



}
