import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-speedrun',
    templateUrl: './speedrun.component.html',
    styleUrls: ['./speedrun.component.scss']
})
export class SpeedrunComponent implements OnInit, OnDestroy {


    constructor() {

        document.body.classList.add('speedrun-page');

    }


    ngOnInit(): void {


    }

    ngOnDestroy(): void {
            
            document.body.classList.remove('speedrun-page');
    
    }



}
