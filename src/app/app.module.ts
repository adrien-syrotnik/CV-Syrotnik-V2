import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateStorage } from './_services/translate-storage.service';
import { HomeComponent } from './_components/home/home.component';
import { NavBarComponent } from './_components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectComponent } from './_components/project/project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectStorageService } from './_services/project-storage.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory:(createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    BrowserAnimationsModule
  ],
  providers: [
    TranslateStorage,
    ProjectStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
