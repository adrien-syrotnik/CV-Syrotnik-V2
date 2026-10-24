import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { SpeedrunService } from 'src/app/_services/speedrun.service';

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
        private speedrunService: SpeedrunService,
        public activeModal: NgbActiveModal) {

        

    }
    ngOnInit(): void {

        this.speedrunService.getScore(this.scoreId).subscribe((data: any) => {
            this.scoreInfos = data.data;
        });

    }

}


