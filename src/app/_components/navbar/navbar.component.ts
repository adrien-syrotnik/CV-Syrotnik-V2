import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateStorage } from 'src/app/_services/translate-storage.service';

declare var bootstrap : any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  languages: any[];

  constructor(public translate: TranslateService,
    public translateStorage: TranslateStorage) {

    this.languages = translate.langs;

  }
  ngOnInit(): void {


    //identify the toggle switch HTML element
    const toggleSwitch : any = document.querySelector('#theme-switch input[type="checkbox"]')!;

    //function that changes the theme, and sets a localStorage variable to track the theme between page loads
    function switchTheme(e:any) {
      if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        toggleSwitch.checked = true;
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        toggleSwitch.checked = false;
      }
    }

    //listener for changing themes
    toggleSwitch.addEventListener('change', switchTheme, false);

    //pre-check the dark-theme checkbox if dark-theme is set
    if (document.body.classList.contains('dark')) {
      toggleSwitch.checked = true;
    }




    function emitValue(event: any) {
      if (event.matches) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        toggleSwitch.checked = true;
      }
      else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        toggleSwitch.checked = false;
      }
    }

    const mediaListQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaListQuery.addEventListener('change', emitValue);


  }




  

}
