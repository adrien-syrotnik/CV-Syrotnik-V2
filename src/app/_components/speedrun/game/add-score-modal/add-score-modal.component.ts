import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { GameService } from 'src/app/_services/api/game.service';

declare var bootstrap: any;

@Component({
    selector: 'game-add-score',
    templateUrl: './add-score-modal.component.html',
    styleUrls: ['./add-score-modal.component.scss']
})
export class AddScoreModalComponent implements OnInit {

    @Input() gameInfo: any = {};
    @Input() gameCategories : any = {};

    public error? : string;
    public data : any = {};
    public submitting = false;

    constructor(public translate: TranslateService,
        private gameService: GameService,
        public activeModal: NgbActiveModal) {

        

    }
    ngOnInit(): void {


    }


    onSubmit() {

        if (this.data.score && this.data.pseudo && (this.data.image || this.data.video || this.data.link)) {
            this.gameService.addGameScore(this.gameInfo.id, this.data).subscribe(val => {
                this.activeModal.close();
            })
            this.data = {};
            this.submitting = true;
        }
        else
            this.error = "Veuillez remplir tous les champs";

    }

}


