import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { last } from "rxjs";
import { PortfolioProject, Project, ProjectTemplate } from "../models/project";
import { Skill } from "../models/skill";
import { projectListTemplate } from "../templates/projects";
import { listSkill } from "../templates/skills";

@Injectable({
  providedIn: 'root',
})
export class ProjectStorageService {

  constructor(public sanitizer: DomSanitizer) {

    
    this.listSkill = listSkill;

    const listProjectTemplate : any = projectListTemplate;
    this.listProject = this.projectTemplateToProject(listProjectTemplate);

    console.log(this.listProject)



    this.listProjectPortfolio = [
      {
        key: 'flexcenterv2',
        main_desc: 'Stage au cours duquel j\'ai pu apprendre à utiliser le framework javascript Angular et à mettre en place un système d\'intégration continue. Mon objectif était de créer une application web frontend permettant d\'afficher des contenus provenant d\'une API.',
        image: 'assets/images/flexnetwork.png',
        low_desc: '',
        name: 'FlexCenter V2 - Frontend',
        year: new Date('2022-04'),
        skills : [
          this.getSkill('equipe'),
          this.getSkill('angular'),
          this.getSkill('gitlab')
        ],
        keywords: [
          'App de gestion de service',
          'Frontend',
          'Système de déploiement',
          'Travail collaboratif'
        ],
        frames : [this.createImageTab(['assets/images/flex1.png','assets/images/flex2.png'])]
      },
      {
        key: 'gpadee',
        main_desc: 'Stage au cours duquel j\'ai repris entièrement le code réalisé par d\'anciens stagiaires. Ma mission consistait à finaliser la programmation d\'un logiciel interne à l\'entreprise, permettant aux membres de l\'équipe de gérer l\'avancement d\'un projet. L\'application a été réalisée en PHP et en Javascript.',
        image: 'assets/images/adee.png',
        low_desc: 'Création d\'un logiciel de sauvegarde de fichier en C#.',
        name: 'GPADEE - Fullstack',
        year: new Date('2021-03'),
        skills : [
          this.getSkill('equipe'),
          this.getSkill('php')
        ],
        keywords: [
          'App de gestion de projet',
          'Fullstack',
          'Autonome'
        ],
        frames : [this.createImageTab(['assets/images/adee1.png','assets/images/adee2.png'])]
      },
      {
        key: 'easy_save',
        main_desc: 'Projet réalisé au sein de mon école, l\'objectif de celui-ci était de réaliser une application permettant de sauvegarder un dossier dans un autre de manière entièrement sécurisée. Au cours de celui-ci, les notions de design pattern, de socket et de process ont été approfondies.',
        image: 'assets/images/easy-save.png',
        low_desc: 'Création d\'un logiciel de sauvegarde de fichier en C#.',
        name: 'Easy Save',
        year: new Date('2021-12'),
        skills : [
          this.getSkill('equipe'),
          this.getSkill('csharp'),
          this.getSkill('azure')
        ],
        keywords: [
          'Système de sauvegarde',
          'Multithreading',
          'Socket'
        ]
      }
    ]

    this.mainSkills = [
      this.getSkill('ai'),
      this.getSkill('n8n'),
      this.getSkill('recherche'),
      this.getSkill('equipe'),
      this.getSkill('react-native'),
      this.getSkill('gitlab'),
      this.getSkill('nodejs'),
      this.getSkill('csharp')
    ];
    this.funSkills = [
      this.getSkill('ai'),
      this.getSkill('n8n')
    ];
  }



  public listSkill: Skill[][];
  public listProject: Project[];
  public listProjectPortfolio: PortfolioProject[];


  public mainSkills: Skill[];
  public funSkills: Skill[];


  private createImageTab(imgTab: string[]) {


    let imgString = '<div class="container-fluid"><div class="row justify-content-center">'


    imgTab.forEach((image) => {
      imgString += '<div class="col-12 col-lg-6 p-0 p-2"><img src="' + image + '" class="w-100"></div>'
    })

    imgString += '</div></div>';

    //console.log(imgString)

    return imgString;

  }



  private createCarousel(id: string, items: { img: string, title: string, desc: string }[]) {

    let carouselString = '';

    carouselString = '<div id="carousel' + id + '" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators">';

    items.forEach((item, i) => {
      carouselString += '<button type="button" data-bs-target="#carousel' + id + '" data-bs-slide-to="0" ' + (i == 0 ? 'class="active" aria-current="true"' : '') + ' aria-label="Slide ' + (i + 1) + '"></button>'
    })

    carouselString += '</div><div class="carousel-inner">';

    items.forEach((item, i) => {
      carouselString += '<div class="carousel-item ' + (i == 0 ? 'active' : '') + '"><img src="' + item.img + '" class="d-block w-100" alt=""><div class="carousel-caption d-none d-md-block"><h5>' + item.title + '</h5><p>' + item.desc + '</p></div></div>'
    })

    carouselString += '</div><button class="carousel-control-prev" type="button" data-bs-target="#carousel' + id + '" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carousel' + id + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>'


    //console.log(carouselString)

    return carouselString;


  }

  public projectToPortfolio(project: Project) {

    var proj: PortfolioProject = project;
    proj.frames = [];

    project.parts?.forEach((part) => {
      if(part.template)
      proj.frames?.push(part.template);
    });


    return proj;

  }


  public getSkill(id: string) {
    var finalSkill : Skill= {} as Skill;
    this.listSkill.forEach((skill) => {
      skill.forEach((s) => {

        if (s.id == id) {
          finalSkill = s;
        }

      })
    });
    return finalSkill;
  }

  /**
   * Transform ProjectTemplate to Project
   * @param listProjectTemplate 
   * @returns 
   */
  private projectTemplateToProject(listProjectTemplate: ProjectTemplate[]): Project[] {
    return listProjectTemplate.map((project) => {
      
      project.parts?.map((part) => {
        //Transform video with sanatized url
        if (part.video) {
          part.video = this.sanitizer.bypassSecurityTrustResourceUrl(part.video);
        }
        //Transform images to template
        if (part.images) {
          part.template = this.createImageTab(part.images);
        }
      });

      const finalProj = project as Project;
      const skillsOriginal = project.skills;
      finalProj.skills = [];
      
      //Transform skill name to skill 
      skillsOriginal?.map((skill) => {
        finalProj.skills?.push(this.getSkill(skill));
      });

     
      
  
      return finalProj as Project;
    });
  }

}
