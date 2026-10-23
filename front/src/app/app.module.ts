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
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './_components/portfolio/portfolio.component';
import { FooterComponent } from './_components/footer/footer.component';

import { GtagModule } from 'angular-gtag';
import { CookieBannerComponent } from './_components/cookie-banner/cookie-banner.component';

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
    PortfolioComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled'}),
    FormsModule,
    HttpClientModule,
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
    {provide: LOCALE_ID, useValue: "fr-CA" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
