import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { last } from "rxjs";
import { PortfolioProject, Project } from "../models/project";
import { Skill } from "../models/skill";

@Injectable({
  providedIn: 'root',
})
export class ProjectStorageService {

  constructor(public sanitizer: DomSanitizer) {

    
    this.listSkill = [
      [
        {
          image: 'https://img.icons8.com/ios/70/000000/developer--v1.png',
          name: 'Soft Skill - Recherches et réflexions',
          id : 'recherche'
        },
        {
          image: 'https://img.icons8.com/ios/70/000000/bar-chart--v1.png',
          name: 'Soft Skill - Diagrammes',
          id : 'diagramme'
        },
        {
          image: 'https://img.icons8.com/ios/70/000000/collaboration.png',
          name: 'Soft Skill - Travail en équipe',
          id : 'equipe'
        }
      ],
      [
        {
          image: '/assets/images/angular_logo.png',
          name: 'Angular',
          id : 'angular'
        },
        {
          image: 'https://img.icons8.com/ios-filled/70/000000/c-sharp-logo.png',
          name: 'C#',
          id : 'csharp'
        },
        {
          image: 'https://img.icons8.com/ios/70/000000/php-logo.png',
          name: 'PHP',
          id : 'php'
        },
        {
          image: 'https://img.icons8.com/ios-filled/70/000000/javascript.png',
          name: 'Javascript',
          id : 'javascript'
        },
        {
          image: 'https://img.icons8.com/color/70/000000/bootstrap.png',
          name: 'Bootstrap',
          id : 'bootstrap'
        },
        {
          image: 'https://img.icons8.com/ios-filled/70/000000/c-plus-plus-logo.png',
          name: 'C++',
          id : 'cpp'
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Processing_3_logo.png/768px-Processing_3_logo.png',
          name: 'Processing',
          id : 'processing'
        },
        {
          image: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/000000/external-development-experience-through-the-native-integrations-of-azure-with-visual-studio-logo-shadow-tal-revivo.png',
          name: 'Azure DevOps',
          id : 'azure'
        },
        {
          image: 'https://img.icons8.com/color/70/000000/gitlab.png',
          name: 'GitLab',
          id : 'gitlab'
        },
        {
          image: 'https://img.icons8.com/windows/70/000000/nodejs.png',
          name: 'NodeJS',
          id : 'nodejs'
        },
        {
          image: 'https://img.icons8.com/color/70/undefined/hadoop-distributed-file-system.png',
          name: 'Hadoop',
          id : 'hadoop'
        }
      ],
      [
        {
          image: 'https://img.icons8.com/ios/70/000000/laravel.png',
          name: 'Laravel',
          id : 'laravel'
        },
        {
          image: 'https://img.icons8.com/ios/70/undefined/solidity.png',
          name: 'Solidity',
          id : 'solidity'
        },
        {
          image: 'https://img.icons8.com/ios/70/000000/cheat-engine.png',
          name: 'Cheat Engine',
          id : 'cheatengine'
        }
      ],
      [
        {
          image: 'https://img.icons8.com/color/70/000000/microsoft-powerpoint-2019--v1.png',
          name: 'Powerpoint',
          id : 'powerpoint'
        },
        {
          image: 'https://img.icons8.com/ios/70/000000/video-trimming.png',
          name: 'Montage vidéo',
          id : 'montage'
        },
      ],
      [
        {
          image: 'https://img.icons8.com/ios-filled/70/000000/unity.png',
          name: 'Unity',
          id : 'unity'
        },
        {
          image: 'https://img.icons8.com/nolan/70/unreal-engine.png',
          name: 'Unreal Engine',
          id : 'unreal'
        }
      ]
      
    ]

    this.listProject = [
      {
        key: 'online_resume_v2',
        portfolio: true,
        main_desc: 'Étant en plein stage concernant Angular, je voulais changer mon site web et en même temps progresser sur ce framework. J\'ai donc décidé de le faire sous Angular, bien que cela ne reflète pas l\'intégralité du framework. Un meilleur design, un dark mode et différentes traductions étaient mes principaux objectifs concernant ce projet.',
        image: 'assets/images/resume-angular.png',
        low_desc: 'CV en ligne v2 (Angular)',
        name: 'Online resume v2',
        year: new Date('2022-01-30'),
        skills: [
          this.getSkill('bootstrap'),
          this.getSkill('angular'),
        ],
        keywords: [
          'Angular',
          'Web design'
        ],
        more_info: true
      },{
      key: 'minecraft_modding',
      portfolio: true,
      main_desc: 'À l\'aide des commandes intégrés au jeu (datapack et command blocks), et à l\'aide d\'un ami, nous avons réalisé différents mini-jeux dans le jeu vidéo Minecraft.',
      image: 'assets/images/grass.png',
      low_desc: 'Réaliser des mini-jeux dans le jeu vidéo Minecraft',
      name: 'Modding Minecraft',
      year: new Date('2016-02'),
      yearEnd: new Date('2021-10'),
      parts: [{
        title: 'SSL (Super Smash Licence)',
        desc: 'Inspiré du célèbre jeu Super Smash Bros, nous avons réalisé un jeu similaire avec des personnages du jeu vidéo qui nous tenaient à cœur.<br/><br/> <i>Link</i> de la série <u>The Legend of Zelda</u>, <i>Doomfist</i> du jeu <u>Overwatch</u>, <i>Edward Kenway</i> de la saga <u>Assassin\'s Creed</u> ou le personnage de notre jeu vidéo <a href="/project/emergency_exit">Emergency Exit</a>, nous avons créé un total de 10 personnages jouables aux capacités uniques !<br/><br/> Vous pouvez voir une démonstration à partir de la vidéo ci-jointe.',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/wZZJa_QlNus')
      }, {
        title: 'Mario Kart Minecraft',
        desc: 'Pour ce projet, nous avions pour but de recopier exactement le jeu <u>Mario Kart</u>.<br/><br/>En passant par la construction des circuits, la reproduction des karts et le système d\'objet, nous avons réussi à finalement reproduire ce jeu dans Minecraft.<br/><br/>Étant assez limités, nous avons utilisé des cochons en guise de kart par exemple.<br/><br/>Vous pouvez voir un exemple du jeu via la vidéo ci-jointe.',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0EbF0eRnaA8')
      }, {
        title: 'Sheep Wars',
        desc: 'Cette fois-ci, ce jeu n\'est certainement pas connu de tout le monde. <u>SheepWars</u> était un mode de jeu que j\'avais découvert sur un ancien serveur Minecraft. Ce jeu nous ayant manqués, et pour tester nos capacités, nous avons donc décidé de reproduire cet ancien mini-jeu.<br/><br/>Le but est assez simple : 2 équipes s\'affrontent sur un terrain dans lequel nous pouvons obtenir des moutons que nous pouvons lancer et ayant certains pouvoirs.<br/><br/> Nous avons par exemple le <i>Mouton Incendiaire</i> qui est représenté sur les images ci-contre, qui après un certain temps explose et répand du feu autour de lui. Le but final : éliminer toute l\'équipe adverse !',
        template: this.createImageTab(['assets/images/sw_launch1.png', 'assets/images/sw_launch2.png', 'assets/images/sw_explo2.png', 'assets/images/sw_explo1.png'])
        //template: this.createCarousel('oui',[{desc:'oui', img :'assets/images/new_photo.jpg', title: ''},{desc:'oui', img :'assets/images/new_photo.jpg', title: ''}])
      }],
      skills: [
        this.getSkill('equipe'),
        this.getSkill('recherche'),
      ],
      keywords: [
        'Command Blocks / Datapack',
        'Game design'
      ],
      more_info: true
    }, {
      key: 'emergency_exit',
      portfolio: true,
      main_desc: 'Réalisé en processing (langage dérivé du java), j\'ai réalisé avec un ami (Arthur Joris), un petit jeu de A à Z. Celui-ci devait être présenté à notre BAC, car il représentait notre note final en ISN (Informatique et Science du Numérique).',
      image: 'assets/images/emergency-logo.png',
      low_desc: 'Mini jeu vidéo, projet de terminal',
      name: 'Emergency Exit',
      year: new Date('2019-02'),
      parts: [{
        title: 'Présentation et téléchargement',
        desc: 'Emergency Exit est le nom que nous avons donné à ce jeu. Le but est très simple : s\'enfuir.<br/><br/> Nous voulions réaliser ce jeu de A à Z, ainsi nous devions confectionner le gameplay, les images ou encore la physique du jeu en lui-même sur Processing, un langage spécialisé dans le graphisme.<br/><br/>Après plusieurs mois, nous avions enfin terminé notre tout premier jeu vidéo sous le nom de groupe "Aidia Info".<br/><br/> Celui-ci dure à peu près 15min, donc si l\'envie vous prend, vous pouvez jouer à notre jeu en le téléchargeant avec ce <a href="assets/dl/Emergency Exit by Aidia Info.zip" download="Emergency Exit by Aidia Info.zip">lien</a> (Windows uniquement).',
        template: this.createImageTab(['assets/images/emergency_lvl1.PNG', 'assets/images/emergency_lvl2.PNG', 'assets/images/emergency-intro.png', 'assets/images/emergency_end.PNG'])
      }, {
        title: 'Un jeu gravé !',
        desc: 'Après avoir terminé le jeu, nous voulions aller plus loin et avons décidé de graver notre jeu sur un CD. <br/><br/>Ainsi, nous avons réalisé 2 CD nous permettant de garder notre jeu sous format physique.',
        template: this.createImageTab(['assets/images/emergency_cd1.jpg', 'assets/images/emergency_cd2.jpg'])
      }],
      skills: [
        this.getSkill('processing'),
        this.getSkill('equipe'),
        this.getSkill('recherche')
      ],
      keywords: [
        'POO',
        'Game design'
      ],
      more_info: true
    }, {
      key: 'speedrun',
      portfolio: true,
      main_desc: 'Souhaitant réaliser un speedrun sur le jeu Emergency Exit, et étant donné que le site de speedrun.com est très limité, j\'ai décidé de réaliser un site web qui va permettre de réaliser des speedruns sur ce jeu. <br/><br/>En plus de cela, j\'ai réalisé des scripts permettant de se chronométrer lorsque l\'on souhaite réaliser un speedrun.',
      image: 'assets/images/speedrun-logo.png',
      low_desc: 'Reproduction du site speedrun.com et réalisation de scripts de speedrun',
      name: 'Speedrun',
      year: new Date('2022-04'),
      parts: [{
        title: 'Un site web : un backend et un frontend',
        desc: 'Pour réaliser ce projet, il fallait pouvoir stocker les informations dans une base de données, et il fallait donc réaliser un backend en plus du frontend. J\'ai décidé de réaliser le backend en utilisant le framework Express.js, et le frontend en utilisant Angular.js. <br/><br/> Le frontend s\'est également fait en collaboration avec Arthur Joris, la même personne ayant développée Emergency Exit avec moi. <br/><br/>Vous pouvez retrouver le site web via le lien suivant : <a href="https://syrotnik.online/speedrun" target="_blank">syrotnik.online/speedrun</a>',
        template: this.createImageTab(['assets/images/speedrun-site1.png', 'assets/images/speedrun-site2.png'])
      }, {
        title: 'Comment chronométrer précisément ?',
        desc: 'Une des problématiques que j\'ai rencontrée lors de la réalisation de ce projet est de pouvoir réaliser un chronomètre précis. <br/><br/>J\'ai donc décidé de réaliser un script qui permet de réaliser un chronomètre précis. <br/><br/> La méthode consistait à récupérer les pointeurs d\'adresses utilisés par l\'application puis de les utiliser dans un script permettant de les interpréter et d\'activer ou non le chronomètre. </br></br> J\'ai réalisé une vidéo à ce sujet : <a href="https://youtu.be/TrgG9KnDgK8" target="_blank">https://youtu.be/TrgG9KnDgK8</a>',
        template: this.createImageTab(['assets/images/speedrun-credit.png', 'assets/images/cheat-engine.png', 'assets/images/speedrun-script.png'])
      }],
      skills: [
        this.getSkill('nodejs'),
        this.getSkill('angular'),
        this.getSkill('cheatengine'),
        this.getSkill('equipe'),
      ],
      keywords: [
        'Recréer',
        'NodeJS / Express',
        'API REST',
        'Adresse mémoire',
        'Speedrun'
      ],
      more_info: true
    },
    {
      key: 'online_resume_v1',
      portfolio: true,
      main_desc: 'Hébergé sur github, ce premier cv marque mon début dans le monde du web. Vous pouvez aller jeter un coup d\'œil avec ce lien : <a href="https://adrien-syrotnik.github.io/CV-Syrotnik-V1/" target="_blank">https://adrien-syrotnik.github.io/CV-Syrotnik-V1/</a>.',
      image: 'assets/images/resume.png',
      low_desc: 'CV en ligne v1 (HTML CSS JS)',
      name: 'Online resume v1',
      year: new Date('2021-02'),
      skills : [
        this.getSkill('bootstrap'),
        this.getSkill('javascript'),
      ],
      keywords: [
        'HTML / CSS / JS',
        'PWA'
      ],
      more_info: true
    },
    {
      key: 'unity_game_1',
      main_desc: 'Un de mes principaux objectifs est de travailler dans le domaine du jeu-vidéo, et j\'ai donc commencé à réaliser un jeu où on doit lancer des pierres. Bien que le jeu ne soit pas trop avancé, j\'ai pour ambition de réaliser un jeu plus tard.',
      image: 'assets/images/unity-test.png',
      low_desc: 'Début d\'un jeu sur Unity',
      name: 'Unity Game (Not finish)',
      year: new Date('2020-02'),
      parts: [{
        title: 'Un test sur le moteur Unity',
        desc: 'Étant très intéressé par le domaine du jeu vidéo, je m\'étais intéressé aux différents moteurs de jeu existant sur le marché. <br/><br/> UnrealEngine, CryEngine, Unity, c\'est donc sur ce dernier que je me suis penché pour réaliser un petit jeu test.<br/><br/> L\'idée de départ était que des monstres apparaissent dans une sorte de grotte et que notre personnage doit leur lancer des projectiles pour les arrêter.<br/><br/>La vidéo suivante représente une démo de ce que j\'imaginais avec ce qui semble être un gobelin et des pierres en guise de projectile.',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iTcdKPDxxeI')
      }],
      skills: [
        this.getSkill('c#'),
        this.getSkill('unity'),
        this.getSkill('recherche')
      ]
    }, {
      key: 'max_calendar',
      main_desc: 'Création d\'une application de gestion de rendez-vous sur-mesure sur le framework <i>Laravel</i>. Le but de l\'application était de pouvoir rechercher les différents rendez-vous ainsi que les filleuls et les parrains liés à ceux-ci. <br/> <br/> Le nom du logiciel provient de la personne qui m\'avait demandé ce logiciel sur-mesure. Différentes statistiques étaient disponibles et permettaient d\'obtenir des fonctionnalités supplémentaires que d\'autres logiciels, comme <u>Google Agenda</u>, ne proposent pas.',
      image: 'https://img.icons8.com/ios/70/000000/calendar--v1.png',
      low_desc: 'Logiciel de gestion d\'emploi du temps (Laravel, Fullstack)',
      name: 'Max\'s Calendar',
      year: new Date('2021-02'),
      skills: [
        this.getSkill('laravel'),
        this.getSkill('php')
      ]
    }, {
      key: 'api_rest',
      main_desc: 'Création d\'une API web via nodeJS. Une première version a été faite en <i>Laravel</i>, mais elle n\'a pas abouti. Celle-ci doit permettre de réaliser des achats en ligne et de gérer les stocks d\'un petit coin de vente intégré à notre école et géré par les élèves (snacks, boissons).',
      image: 'https://img.icons8.com/ios/70/000000/cardboard-box.png',
      low_desc: 'API pour mon école et ses étudiants (NodeJS, Express)',
      name: 'API REST',
      skills: [
        this.getSkill('javascript'),
        this.getSkill('nodejs')
      ]
    }, {
      key: 'minesweeper',
      portfolio: true,
      main_desc: 'Souhaitant me mettre au défi, j\'ai souhaité réaliser mon propre démineur, un jeu iconique.',
      image: 'assets/images/demineur.png',
      low_desc: 'Un simple démineur (Processing)',
      name: 'Minesweeper',
      year: new Date('2020-02'),
      parts: [{
        title: 'Explication et téléchargement',
        desc: 'Programmé en <u>Processing</u>, un dérivé du Java, j\'ai réussi à réaliser un démineur 100% fonctionnel. Vous pouvez noter où se trouvent les bombes à l\'aide de click droit, et il existe aussi un système "anti-malchance" pour éviter de tomber sur une bombe dès le premier coup.<br/><br/>Vous pouvez apercevoir un aperçu avec l\'image ci-contre, mais si vous souhaitez tester mon démineur, vous pouvez le télécharger <a href="assets/dl/Démineur by Adrien Syrotnik.zip" download="Démineur by Adrien Syrotnik.zip">ici</a> (Windows uniquement).',
        template: '<img src="assets/images/demineur.gif">'
      }],
      skills : [
        this.getSkill('recherche'),
        this.getSkill('processing')
      ],
      keywords: [
        'Recréer',
        'POO'
      ],
      more_info: true
    },
    {
      key: 'animator',
      main_desc: 'Le but de cette application était de créer des animations facilement. Je voulais animer des petites idées facilement sans prise de tête, mais je ne connaissais pas de logiciel permettant de faire cela, j\'ai donc décidé de créer le mien.',
      image: 'assets/images/animator.png',
      low_desc: 'Logiciel d\'animation (Processing)',
      name: 'Animator',
      year: new Date('2020-02'),
      parts: [{
        title: 'Explication et téléchargement',
        desc: 'Créé avec le langage <u>Processing</u>, un dérivé du Java, le principe est le suivant : pouvoir créer des points que l\'on peut relier entre eux, puis de pouvoir changer leurs positions dans le temps. Enfin, il suffit de lancer la lecture et le tour est joué !<br/><br/> Comme vous pouvez le voir, j\'ai créé cette petite animation ci-contre, à l\'aide du logiciel.<br/><br/>Si vous voulez l\'essayer, téléchargez-le <a href="assets/dl/Animator by Adrien Syrotnik.zip" download="Animator by Adrien Syrotnik.zip">ici</a> (Windows uniquement).',
        template: '<img src="assets/images/animator.gif" class="w-100">'
      }],
      skills: [
        this.getSkill('recherche'),
        this.getSkill('processing')
      ]
    }];



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
      this.getSkill('recherche'),
      this.getSkill('equipe'),
      this.getSkill('angular'),
      this.getSkill('gitlab'),
      this.getSkill('nodejs'),
      this.getSkill('csharp')
    ];
    this.funSkills = [
      this.getSkill('unity'),
      this.getSkill('unreal'),
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

}