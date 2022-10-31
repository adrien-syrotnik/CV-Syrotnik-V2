import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModalModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMaskModule } from "ngx-mask";
import { AddScoreModalComponent } from "src/app/_components/speedrun/game/add-score-modal/add-score-modal.component";
import { GameCategoryComponent } from "src/app/_components/speedrun/game/category/game-category.component";
import { GameComponent } from "src/app/_components/speedrun/game/game.component";
import { ListGameComponent } from "src/app/_components/speedrun/list-game/list-game.component";
import { SpeedrunComponent } from "src/app/_components/speedrun/speedrun.component";
import { GameService } from "src/app/_services/api/game.service";
import { ProjectStorageService } from "src/app/_services/project-storage.service";
import { TranslateStorage } from "src/app/_services/translate-storage.service";
import { SpeedrunRoutes } from "./speedrun.routing";

@NgModule({
    declarations: [
        SpeedrunComponent,
        GameComponent,
        ListGameComponent,
        GameCategoryComponent,
        AddScoreModalComponent
      ],
      imports: [
        FormsModule,
        CommonModule,
        NgbNavModule,
        NgbModalModule,
        ReactiveFormsModule,
        RouterModule.forChild(SpeedrunRoutes),
        NgxMaskModule.forChild(),
        TranslateModule.forChild()
      ],
      providers: [
        TranslateStorage,
        ProjectStorageService,
        GameService
      ]
  })
  export class SpeedrunModule {}