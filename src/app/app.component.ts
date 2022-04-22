import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateStorage } from './_services/translate-storage.service';

declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService,
    public translateStorage: TranslateStorage) {

    this.detectColorScheme();


    // function emitValue(event: any) {
    //   if (event.matches)
    //     document.body.classList.add('dark')
    //   else
    //     document.body.classList.remove('dark')
    // }

    // const mediaListQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // mediaListQuery.addEventListener('change', emitValue);



    AOS.init();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  //determines if the user has a set theme
  detectColorScheme() {
    var theme = "light";    //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        var theme = "dark";
      }
    } else if (!window.matchMedia) {
      //matchMedia method not supported
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.body.classList.add('dark');
    }

    return true
  }
  
}
