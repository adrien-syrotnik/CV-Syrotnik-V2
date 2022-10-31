import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { GameService } from 'src/app/_services/api/game.service';

declare var bootstrap: any;

@Component({
    selector: 'game-score-info-modal',
    templateUrl: './score-info-modal.component.html',
    styleUrls: ['./score-info-modal.component.scss']
})
export class ScoreInfoModalComponent implements OnInit {

    public scoreInfos: any = {};
    @Input() gameInfos: any = {};
    @Input() scoreId!: number | string;

    constructor(public translate: TranslateService,
        private gameService: GameService,
        public activeModal: NgbActiveModal) {

        

    }
    ngOnInit(): void {

        this.gameService.getScore(this.scoreId).subscribe((data: any) => {
            this.scoreInfos = data.data;
        });

    }
    
    getVideoUrl() {
        return this.gameService.getScoreVideoURL(this.scoreId);
    }
    getImageUrl() {
        return this.gameService.getScoreImageURL(this.scoreId);
    }

}


