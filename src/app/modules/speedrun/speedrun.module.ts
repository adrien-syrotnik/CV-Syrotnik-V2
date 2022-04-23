import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgxMaskModule } from "ngx-mask";
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
        ListGameComponent
      ],
      imports: [
        FormsModule,
        CommonModule,
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