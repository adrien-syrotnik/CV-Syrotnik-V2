import { Component, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { LinkAccount } from "src/app/models/link-account";
import { PortfolioProject, Project } from "src/app/models/project";
import { Skill } from "src/app/models/skill";
import { ProjectStorageService } from "src/app/_services/project-storage.service";

declare var bootstrap: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  
  public yearOld: any;
  public projects: PortfolioProject[];

  public linksAccount : LinkAccount[] = [{
    image : 'assets/images/linkedin.png',
    link : 'https://www.linkedin.com/in/adrien-syrotnik-8766021a1/',
    name : 'Linkedin'
  },
  {
    image : 'assets/images/github.png',
    link : 'https://github.com/adrien-syrotnik',
    name : 'GitHub'
  },{
    image : 'assets/images/codingame.png',
    link : 'https://www.codingame.com/profile/d315760989a8705b0b09cea559975f003735224',
    name : 'CodinGame'
  },{
    image : 'assets/images/new_photo.jpg',
    link : 'https://syrotnik.online/',
    name : 'Mon CV en ligne'
  }];

  public funSkills: Skill[];
  public mainSkills: Skill[];

  constructor(private projectStorage: ProjectStorageService,
              public sanitizer: DomSanitizer,) {

    this.projects = this.projectStorage.listProjectPortfolio;
    this.projectStorage.listProject.forEach(project => {
      if (project.portfolio) {
        this.projects.push(this.projectStorage.projectToPortfolio(project));
      }
    });

    this.funSkills = this.projectStorage.funSkills;
    this.mainSkills = this.projectStorage.mainSkills;

    this.projects.sort();

    this.yearOld = new Date(Date.now() - new Date("2001-10-27").getTime()).getUTCFullYear() - 1970;
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    setTimeout(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
        })
      })
    });
    
  }

  getPDF() {

  }

}