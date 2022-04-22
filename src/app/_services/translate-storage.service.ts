import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

const LANGUAGE_STORAGE = "language"

@Injectable({
    providedIn: 'root',
  })
export class TranslateStorage {
    
    constructor(private translate: TranslateService) {

        translate.setDefaultLang(this.getLanguage())
        translate.langs = ['fr', 'en'];

    }

    animProjectLaunch = false;

    setLanguage(lang: string) : void {
        this.translate.setDefaultLang(lang)
        localStorage.setItem(LANGUAGE_STORAGE,lang)
    }

    getLanguage() : string {
        const lang = localStorage.getItem(LANGUAGE_STORAGE);
        if(!lang)
            return 'fr'

        return lang
    }



}