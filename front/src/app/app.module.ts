import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { TranslateStorage } from './_services/translate-storage.service';
import { HomeComponent } from './_components/home/home.component';
import { NavBarComponent } from './_components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectComponent } from './_components/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectStorageService } from './_services/project-storage.service';
import { SpeedrunComponent } from './_components/speedrun/speedrun.component';
import { GameService } from './_services/api/game.service';
import { GameComponent } from './_components/speedrun/game/game.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScoreInfoModalComponent } from './_components/speedrun/game/score-info-modal/add-score-modal/score-info-modal.component';
import { PortfolioComponent } from './_components/portfolio/portfolio.component';
import { FooterComponent } from './_components/footer/footer.component';

import { GtagModule } from 'angular-gtag';
import { CookieBannerComponent } from './_components/cookie-banner/cookie-banner.component';
import { ChatGPTComponent } from './_components/chatGPT/chatGPT.component';
import { ChatGPTService } from './_services/chatgpt.service';

registerLocaleData(localeFr);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProjectComponent,
    ScoreInfoModalComponent,
    PortfolioComponent,
    FooterComponent,
    CookieBannerComponent,
    ChatGPTComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled'}),
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    GtagModule.forRoot({ trackingId: 'G-RXPYFFMF4Z', trackPageviews: true }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory:(createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    TranslateStorage,
    ProjectStorageService,
    ChatGPTService,
    {provide: LOCALE_ID, useValue: "fr-CA" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
