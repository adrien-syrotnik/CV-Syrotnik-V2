import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Hobbie } from 'src/app/models/hobbie';
import { ExperienceOrFormation } from 'src/app/models/experience_or_formation';
import { Project } from 'src/app/models/project';
import { Skill } from 'src/app/models/skill';
import { TranslateStorage } from 'src/app/_services/translate-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectStorageService } from 'src/app/_services/project-storage.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LinkAccount } from 'src/app/models/link-account';
import { hobbies as hobbiesTemplate } from 'src/app/templates/hobbies';
import { experiences as experiencesTemplate } from 'src/app/templates/experienceOrFormation';
import { linksAccount as linksAccountTemplate } from 'src/app/templates/linkAccount';
import { certificates } from 'src/app/templates/certificates';
import { Certificate } from 'src/app/models/certificate';

declare var anime: any;
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  sendForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });


  languages: any[];


  linksAccount : LinkAccount[] = linksAccountTemplate;
  experiences: ExperienceOrFormation[] = experiencesTemplate;
  projects: Project[];
  skills: Skill[][] = this.projectStorage.listSkill;
  certificates: Certificate[] = certificates;




  hobbies: Hobbie[] = hobbiesTemplate;



  constructor(public translate: TranslateService,
    public translateStorage: TranslateStorage,
    private http: HttpClient,
    private projectStorage: ProjectStorageService,
    private router: Router,
    private route: ActivatedRoute) {

    this.projects = projectStorage.listProject;

    this.languages = translate.langs;
    //console.log(translate.getDefaultLang())

  }



  scrollSpy: any

  ngOnInit(): void {

    this.scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example',
      offset: 150
    })



    setTimeout(() => {


      const id = this.route.snapshot.fragment;
      if(id) {
        const yOffset = -10;
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
      



      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
        })
      })


      var projects = document.querySelectorAll('.project');
      var experiences = document.querySelectorAll('.experience');
      let randomDeg = this.randomDeg;

      [].forEach.call(projects, function (div: any) {
        // do whatever
        //div.style['background'] = 'linear-gradient('+randomF()+'deg, rgba(63, 94, 251, 1) 0%, rgba(112, 88, 214, 1) 34%, rgba(146, 83, 188, 1) 70%, rgba(252, 70, 107, 1) 100%)';
        //div.style['background-color'] = '#fbb034';
        //div.style['background-image'] = 'linear-gradient('+randomDeg()+'deg, #fbb034 0%, #ffdd00 74%)';




      });

      [].forEach.call(experiences, function (div: any) {
        // do whatever

        //div.style['background-image'] = 'radial-gradient( circle farthest-corner at '+(Math.floor(Math.random()*100))+'% '+(Math.floor(Math.random()*100))+'%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% )';
      });


      anime({
        targets: '#mainSquare',
        // translateX: [
        //   { value: 250, duration: 1000, delay: 500 },
        //   { value: 0, duration: 1000, delay: 500 }
        // ],
        // translateY: [
        //   { value: -40, duration: 500 },
        //   { value: 40, duration: 500, delay: 1000 },
        //   { value: 0, duration: 500, delay: 1000 }
        // ],
        // scaleX: [
        //   { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        //   { value: 1, duration: 900 },
        //   { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        //   { value: 1, duration: 900 }
        // ],
        // scaleY: [
        //   { value: [1.75, 1], duration: 500 },
        //   { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        //   { value: 1, duration: 450 },
        //   { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        //   { value: 1, duration: 450 }
        // ],
        delay: 1000,
        duration: 2000,
        scale: 0.2,
        rotate: '1turn',
        direction: 'alternate',
        //easing: 'steps(10)',
        loop: true
      });





      function projectMove() {
        anime({
          targets: '.project',
          translateX: function () {
            return anime.random(-10, 10);
          },
          translateY: function () {
            return anime.random(-10, 10);
          },
          duration: 3000,
          complete: projectMove,
          easing: 'easeInSine'

        });
      }


      if (!this.translateStorage.animProjectLaunch) {

        projectMove();
        this.translateStorage.animProjectLaunch = true;

      }









    })





  }

  sendMailHTML?: string;

  Submit() {

    if (this.sendForm.valid) {


      this.http.post("https://formspree.io/f/xbjwdykl", { email: this.sendForm.controls['email'].value, message: this.sendForm.controls['message'].value }, {
        headers: {
          'Accept': 'application/json'
        }
      }).subscribe({
        next: resp => {
          this.translate.get('SENDMAIL.SUCCESS').subscribe(val => this.sendMailHTML = "<span class='text-success'>" + val + "</span>");
        },
        error: error => {
          this.translate.get('SENDMAIL.ERROR').subscribe(val => this.sendMailHTML = "<span class='text-danger'>" + val + "</span>");
        }
      })

      this.sendForm.reset();


    }
    else {
      this.translate.get('SENDMAIL.ERROR').subscribe(val => this.sendMailHTML = "<span class='text-danger'>" + val + "</span>");
    }



  }


  public randomDeg() {
    return Math.floor(Math.random() * 360)
  }


  public CheckCurrentDate(date?: Date) {
    //Return true if date is after today
    if (date) {
      return date > new Date();
    }
    return false;
  }

  ngOnDestroy(): void {
    this.scrollSpy.dispose()
  }


}
