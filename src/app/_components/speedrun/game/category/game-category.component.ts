import { Component, EventEmitter, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/api/game.service';
import { ScoreInfoModalComponent } from '../score-info-modal/add-score-modal/score-info-modal.component';


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

    public loading = false;

    public scores : any[] = [];

    constructor(private gameService: GameService,
        private modalService: NgbModal) {

        
    
    }
    ngOnInit(): void {

        this.sub = this.emitRefresh.subscribe(() => {
            this.getScores();
        })
        this.getScores();
        
    }

    openScoreInfoModal(scoreId : string) {
        const modalRef = this.modalService.open(ScoreInfoModalComponent);
        (modalRef.componentInstance as ScoreInfoModalComponent).gameInfos = this.gameInfo;
        (modalRef.componentInstance as ScoreInfoModalComponent).scoreId = scoreId;
    }

    getScores() {
        this.loading = true;
        this.gameService.getGameCategoryScores(this.gameInfo.id, this.categoryId).subscribe((data: any) => {
            this.scores = data.data;
            this.loading = false;
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }



}
