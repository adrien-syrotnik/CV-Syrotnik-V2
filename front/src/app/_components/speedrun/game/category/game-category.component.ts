import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SpeedrunService } from 'src/app/_services/speedrun.service';
import { ScoreInfoModalComponent } from '../score-info-modal/score-info-modal.component';


@Component({
    selector: 'game-category',
    templateUrl: './game-category.component.html',
    styleUrls: ['./game-category.component.scss']
})
export class GameCategoryComponent implements OnInit {

    @Input() public gameInfo: any;
    @Input() public categoryId!: string;
    public loading = false;

    public scores : any[] = [];

    constructor(private speedrunService: SpeedrunService,
        private modalService: NgbModal) {

        
    
    }
    ngOnInit(): void {

        this.getScores();
        
    }

    openScoreInfoModal(scoreId : string) {
        const modalRef = this.modalService.open(ScoreInfoModalComponent);
        (modalRef.componentInstance as ScoreInfoModalComponent).gameInfos = this.gameInfo;
        (modalRef.componentInstance as ScoreInfoModalComponent).scoreId = scoreId;
    }

    getScores() {
        this.loading = true;
        this.speedrunService.getGameCategoryScores(this.gameInfo.id, this.categoryId).subscribe((data: any) => {
            this.scores = data.data;
            this.loading = false;
        });
    }



}
