import { ProjectTemplate } from '../models/project';

export const projectListTemplate: ProjectTemplate[] = [
  {
    portfolio: true,
    more_info: true,
    github: '',
    key: 'carmino',
    main_desc:
      "Jeu réalisé dans le cadre d'une gaming jam avec l'aide de 2 autres personnes, le but était de réaliser un jeu en 60h sur un thème donné. Le thème de cette jam était : \"One Ability\", avec une intégration d'un objet, ici : \"Card\". Le but du jeu est de se déplacer dans une ville et de passer des barrages de police en utilisant des cartes volées aux autres personnages.",
    image: 'assets/images/projects/carmino-logo.png',
    low_desc: 'Jeu vidéo réalisé en 60h (Unity / C#)',
    name: 'Carmino',
    year: new Date('2024-06-09'),
    parts: [
      {
        title: '2 Développeurs et 1 Game Designer',
        desc: 'Carmino a été réalisé dans le cadre d\'une gaming jam, avec l\'aide de 2 autres personnes, dont 2 développeurs et 1 game designer. <br><br> Le but de cette jam était de réaliser un jeu en 60h sur un thème donné. Le thème de cette jam était : "One Ability", avec une intégration d\'un objet, ici : "Card". <br><br> Nous avons donc réaliser un jeu dans lequel le joueur doit se déplacer dans une ville et passer des barrages de police en utilisant des cartes volées aux autres personnages. De type "Puzzle", le joueur doit donc réfléchir à la manière d\'utiliser les cartes pour passer les barrages et les portes. <br><br> Le jeu a été réalisé sur Unity, et l\'ensemble des modèles 3D ont été réalisés par le game designer. <br><br>Vous pouvez retrouver le jeu sur la page itch.io du jeu : <a href="https://deltainstudio.itch.io/carmino" target="_blank">Carmino</a>.',
        template: `<iframe allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true" scrolling="no" src="https://html-classic.itch.zone/html/10674772/index.html" id="game_drop" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" frameborder="0" width="960" height="642"></iframe>`,
      },
    ],
    skills: ['unity', 'csharp', 'equipe'],
  },
  {
    portfolio: true,
    more_info: true,
    github: 'https://github.com/adrien-syrotnik/Tech-and-Sorcery',
    key: 'tech-and-sorcery',
    main_desc:
      "Jeu VR basé sur le jeu Blade and Sorcery, qui devait être réalisé pour finaliser le parcours VR présent sur le site Unity learn. Le but du jeu est d'utiliser des armes et des sorts pour tuer des adversaires qui apparaissent sous forme de vague.",
    image: 'assets/images/projects/tech-and-sorcery-logo.png',
    low_desc: 'Jeu VR de simulation de combat (Unity / XR Toolkit)',
    name: 'Tech and Sorcery - VR',
    year: new Date('2022-09-11'),
    parts: [
      {
        title: 'Présentation du jeu',
        desc: 'Tech and Sorcery est un jeu VR développé sur Unity reprenant les bases du jeu <a href="https://store.steampowered.com/app/629730/Blade_and_Sorcery/">Blade and Sorcery</a>. <br><br> Le but du jeu est le suivant : utiliser des armes et des sorts pour tuer ses ennemis. Vous pouvez trouver ici une vidéo présentant l\'ensemble du projet.<br><br> Différentes compétences ont été nécessaires pour réaliser ce projet. Globalement, au cours de ce projet, j\'ai appris à : créer des shaders, créer des effets VFX, coder une IA, faire de la reconnaissance de mouvement, utiliser XR Toolkit pour faire des interactions avec le joueur en VR...<br><br>Si vous possédez un casque Meta Quest 2, vous pouvez télécharger le jeu via ce <a href="https://www.mediafire.com/file/pfsdlqxk6u1ao3m/Tech_and_Sorcery.zip/file">lien</a>.',
        video: 'https://www.youtube.com/embed/K_8HuKBucdA',
      },
      {
        title: 'Sorts',
        desc: 'Lorsque vous arrivez dans le jeu, votre main droite vous permet de dessiner des formes. Ceraines formes sont liées à des symboles (Feu, Terre...) et les dessiner les unes à la suite des autres permet de déclancher des combos et donc de lancer un sort.<br><br> Il existe un total de <span class="text-info">7 symboles et de 8 combos</span> actuellement dans le jeu. Il existe par exemple le sort de la boule de feu. Pour le lancer, il suffit de réaliser un symbole de feu suivi d\'un symbole tourbillon. Celui-ci lancera une boule de feu en face du joueur qui fera des dégâtes aux ennemis touchés. <br><br> Vous pouvez retrouver l\'ensemble des sorts en regardant la vidéo, ou les images présentes ci-contre.',
        images: [
          'assets/images/projects/tech-and-sorcery/sort_1.png',
          'assets/images/projects/tech-and-sorcery/sort_2.png',
          'assets/images/projects/tech-and-sorcery/sort_3.png',
          'assets/images/projects/tech-and-sorcery/sort_4.png',
        ],
      },
      {
        title: 'Armes',
        desc: 'Que serait un Tech and Sorcery sans ses technologies ? C\'est donc là qu\'interviennent les armes ! <br><br> Il existe 3 armes dans le jeu : un pistolet laser, un bazooka et... un sabre laser ! <br><br> Le <span class="text-primary">pistolet</span> laser est une arme de base, il vous permet de lancer des lasers qui font peu de dégâts aux ennemis mais avec une grande cadence de tir.<br> Le <span class="text-success">bazooka</span> vous permet de faire des explosions à distance, infligeant beaucoup de dégâts. <br> Enfin, le <span class="text-danger">sabre laser</span> permet non seulement d\'infliger de lourds dégâts aux adversaires, mais aussi de couper certains éléments du décor ! <br><br> Vous pouvez retrouver l\'ensemble des armes en regardant la vidéo, ou les images présentes ci-contre.',
        images: [
          'assets/images/projects/tech-and-sorcery/weapon_1.png',
          'assets/images/projects/tech-and-sorcery/weapon_2.png',
          'assets/images/projects/tech-and-sorcery/weapon_3.png',
          'assets/images/projects/tech-and-sorcery/weapon_4.png',
        ],
      },
    ],
    skills: ['unity', 'csharp', 'vr'],
  },
  {
    portfolio: true,
    more_info: true,
    key: 'vr-pots-app',
    main_desc:
      "Application en VR (Réalité Virtuelle) réalisée lors de mon stage à l'université technologique de Cluj Napoca pour un musée. Le but de celle-ci est de permettre aux visiteurs du musée d'être immergés dans un monde virtuel et de découvrir des poteries anciennes, en les manipulant et en les scannant pour en savoir plus sur ces anciens artefacts.",
    image: 'assets/images/projects/vr-pots-app.png',
    low_desc:
      'Application de réalité virtuelle dédiée à un musée permettant la découverte de modèles 3D de poteries anciennes (Unity)',
    name: 'Pots application - VR',
    year: new Date('2023-01-20'),
    parts: [
      {
        title: "La réalité virtuelle pour améliorer l'exploration culturelle",
        desc: "Commandée par un musée, cette application permet aux visiteurs de découvrir des poteries anciennes en les manipulant et en lisant des descriptions dans l'environnement de l'utilisateur. <br><br>Pour obtenir les modèles 3D, différents scans ont été réalisés sur des poteries réelles, puis importés dans l'environnement. Le décors, quant à lui, a été créé de toutes pièces sur le logiciel Blender. <br><br>Différentes fonctionnalités ont été ajoutées à l'application, comme la possibilité de scanner les pots pour obtenir leur description, de changer la langue de l'application, d'écouter un narrateur ou la possibilité de casser les pots avec suffisamment de force. Vous pouvez découvrir toutes les fonctionnalités en regardant la vidéo ci-contre.",
        video: 'https://www.youtube.com/embed/7EnldaDAZIc',
      },
    ],
    skills: ['unity', 'csharp', 'vr', 'blender', 'equipe'],
  },
  {
    portfolio: true,
    more_info: true,
    key: 'bronze-matrix',
    main_desc:
      "Application en AR (Réalité Augmenté) réalisée dans le cadre de mon stage et d'un travail de recherche dans l'université technologique de Cluj Napoca. Le but de celle-ci est de permettre aux visiteurs d'un musée de visualiser des objets en 3D dans le monde réel sur un moule en bronze vieux de 2000 ans.",
    image: 'assets/images/projects/bronze-matrix-logo.jpg',
    low_desc:
      "Visualisation de modèles 3D à l'aide de la réalité augmentée (Unity / Vuforia)",
    name: 'Bronze Matrix - AR',
    year: new Date('2022-09-11'),
    parts: [
      {
        title: 'Réalité augmentée et travaux de recherche',
        desc: "Cette application a été conçue dans le cadre d'un travail de recherche intitulé : <u>\"Mise en valeur du patrimoine culturel par la réalité étendue : L'étude de cas de la matrice dacienne à motifs creux\"</u>. <br><br> L'objectif de cet article était de voir comment la réalité étendue (XR), c'est-à-dire la réalité virtuelle et la réalité augmentée, pouvait être utilisée pour améliorer l'expérience des visiteurs d'un musée. Pour ce faire, une application en réalité augmentée a été réalisée, permettant aux visiteurs de visualiser des objets en 3D sur un moule en bronze vieux de 2000 ans. <br><br> Des animaux ont été gravés sur le moule et l'application permet de faire ressortir les modèles 3D de chaque animal. Si l'utilisateur clique dessus, une description et une animation apparaissent. L'utilisateur a la possibilité de faire pivoter les modèles 3D ou encore de changer les matériaux qui les composent. Enfin, une partie histoire est disponible, permettant à l'utilisateur d'observer avec des photos, comment l'objet a été trouvé. <br><br> Cette application a été réalisée en utilisant Unity et Vuforia.",
        images: [
          'assets/images/projects/bronze-matrix/matrix_project_1.jpg',
          'assets/images/projects/bronze-matrix/matrix_project_2.jpg',
          'assets/images/projects/bronze-matrix/matrix_project_3.jpg',
          'assets/images/projects/bronze-matrix/matrix_project_4.jpg',
        ],
      },
    ],
    skills: ['unity', 'csharp', 'ar', 'blender', 'recherche'],
  },
  {
    portfolio: true,
    more_info: true,
    key: 'os-game',
    github: 'https://github.com/adrien-syrotnik/One-Shot',
    main_desc:
      "Souhaitant réaliser un jeu en ligne, ce jeu avait pour but de tester mes récentes compétences en Unity. En plus de cela, j'ai appris à réaliser un jeu en ligne en utilisant Netcode et Unity Services.",
    image: 'assets/images/projects/one-shot-logo.png',
    low_desc: 'Mini-jeu simple multijoueur (Unity / Netcode)',
    name: 'One Shot',
    year: new Date('2022-07-18'),
    parts: [
      {
        title: 'Multijoueur et en ligne',
        desc: '<i>One Shot</i> est un mini-jeu multijoueur où le joueur doit survivre face à ses adversaires. Pour éliminer les autres joueurs, le joueur possède un bâton qui est capable de tirer des lasers qui peuvent tuer d\'un coup, et il peut courir, sauter et glisser.<br><br> Pour réaliser ce jeu, j\'ai dû comprendre et utiliser le plugin Netcode de Unity permettant de réaliser des jeux multijoueurs. Pour essayer mon jeu en ligne, j\'ai également utilisé les "Unity Services" qui m\'ont permis d\'effectuer une liaison avec les autres joueurs partout dans le monde (Relais).<br><br> Vous pouvez télécharger le jeu via ce <a href="/assets/dl/OS Game.zip" download="OS Game.zip">lien</a> (/!\\ Le jeu ne va pas marcher car il faut activer le relais sur les Unity services).',
        video: 'https://www.youtube.com/embed/_0NoBUmdKkc',
      },
    ],
    skills: ['unity', 'csharp', 'recherche'],
  },
  {
    portfolio: true,
    more_info: false,
    key: 'sport-dehors',
    main_desc:
      "Conception d'une application mobile permettant de trouver des terrains de sport en extérieur. L'application permet de trouver des terrains de sport à proximité, ou via une recherche, et de voir les informations sur ces terrains (équipements, horaires...) en utilisant la géolocalisation et les données de l'API du gouvernement français.",
    image: 'assets/images/projects/sport-dehors/logo-sport-dehors.jpg',
    low_desc: 'Application mobile de recherche de terrains de sport (React Native)',
    name: 'Sport Dehors',
    // year: new Date('2024-04-05'),
    parts: [
      {
        title: 'Application multi-plateforme',
        desc: 'Sport Dehors est une application mobile réalisée en React Native. <br><br> L\'objectif de cette application est de permettre aux utilisateurs de trouver des terrains de sport en extérieur. Actuellement en version d\'essai, un POC, l\'application ne permet aujourd\'hui que de rechercher des city-stades et des terrains de street workout en France. <br><br> Pour ce faire, l\'application utilise la géolocalisation de l\'utilisateur pour lui proposer des terrains à proximité. <br><br> Les données des terrains sont récupérées via l\'API du gouvernement français, et permettent de voir les informations sur ces terrains (équipements, horaires...). <br><br> L\'application est disponible sur Android et iOS grâce à React Native qui permet de réaliser des applications multi-plateformes avec un seul code source. <br><br> Pour finir, ce projet a été l\'occasion de travailler en équipe (3 personnes) et de travailler sur la gestion de projet. <br><br>Vous pouvez voir quelques images de l\'application ci-contre.',
        images: [
          'assets/images/projects/sport-dehors/1.png',
          'assets/images/projects/sport-dehors/2.png'
        ],
      },
    ],
    skills: ['react-native','equipe', 'management'],
  },
  {
    portfolio: true,
    more_info: false,
    key: 'geo-game-guesser',
    main_desc:
      "Conception d'un site web permettant de jouer à un jeu de géographie. Le but est de trouver l'emplacement précis du joueur sur une carte d'un jeu vidéo. Le site web est réalisé en utilisant le framework Svelte, et les jeux testés sont : Counter-Strike 2 et Zelda Minish Cap.",
    image: 'assets/images/projects/geo-game-guesser.jpg',
    low_desc: 'Jeu de géographie des jeux vidéo (Svelte)',
    name: 'Geo Game Guesser',
    year: new Date('2024-04-05'),
    parts: [
      {
        title: 'Fonctionnement du jeu',
        desc: 'Basé sur le principe du jeu <a href="https://www.geoguessr.com/fr" target="_blank">GeoGuessr</a>, et repris de l\'idée du site web <a href="https://www.lostgamer.io/" target="_blank">LostGamer</a>, le but de ce jeu est de trouver l\'emplacement exact du joueur sur une carte d\'un jeu vidéo. <br><br> Pour ce faire, j\'ai utilisé le framework Svelte pour réaliser le site web, et utilisé les librairies <a href="https://leafletjs.com/" target="_blank">Leaflet</a> et <a href="https://threejs.org/" target="_blank">Three.js</a> pour la partie cartographie et 3D (vue 360°). <br><br> Les jeux testés sont Counter-Strike 2 et Zelda Minish Cap, pour tester à la fois des jeux en 3D et en 2D, ce qui diffère du site LostGamer qui ne propose que des jeux en 3D. <br><br> Afin de réaliser des images 360° panoramiques de CS2, j\'ai réalisé plusieurs captures d\'écran du jeu, puis je les ai assemblées pour obtenir une image panoramique (stitching) en utilisant la librairie openCV sur Python.',
        images: [
          'assets/images/projects/geo-game-guesser/1.png',
          'assets/images/projects/geo-game-guesser/2.png',
          'assets/images/projects/geo-game-guesser/3.png',
          'assets/images/projects/geo-game-guesser/4.png',
        ],
      },
    ],
    skills: ['svelte', 'python'],
  },
  {
    portfolio: true,
    more_info: true,
    github: 'https://github.com/adrien-syrotnik/casino-ai-svelte',
    key: 'casino-ai',
    main_desc:
      "Conception d'une machine à sous en ligne, intégrant des thèmes générés par intelligence artificielle, permettant aux utilisateurs de personnaliser leur expérience de jeu. Le projet inclut également des animations pour accroître le réalisme, avec un rendement de 500% pour une expérience de jeu divertissante, accompagné d'un bonus aléatoire offrant entre 3 et 9 symboles jokers.",
    image: 'assets/images/projects/casino-ai.jpg',
    low_desc:
      'Machine à sous en ligne avec thèmes générés par une IA (Svelte / Python)',
    name: 'Casino AI',
    year: new Date('2024-01-14'),
    parts: [
      {
        title: 'Présentation de la machine à sous',
        desc: 'Casino AI, ou "Dynamic Slot", est une machine à sous en ligne réalisée avec le framework Svelte. <br><br>L\'objectif principal de ce projet était de créer une machine à sous en ligne intégrant des images générées par une intelligence artificielle. L\'objectif ultime était de permettre à l\'utilisateur de personnaliser la machine sur laquelle il souhaite jouer, même si elle n\'existe pas encore. <br><br> Pour atteindre cet objectif, j\'ai utilisé plusieurs intelligences artificielles, notamment <a href="https://huggingface.co/dataautogpt3/OpenDalleV1.1">OpenDalleV1.1</a>, qui est hébergée localement sur ma machine. Cette intelligence artificielle est employée pour générer des images de la machine en fonction d\'un thème choisi par l\'utilisateur. <br> Par la suite, pour optimiser les résultats, l\'API d\'OpenAI a été mise à contribution. <a href="https://openai.com/research/gpt-4">GPT-4</a> a été utilisé pour générer des textes liés au thème choisi par l\'utilisateur, et ces textes ont ensuite été employés comme descriptions pour la génération d\'images avec <a href="https://openai.com/dall-e-3">DALL-E 3</a>. <br><br> Vous pouvez essayer la machine à sous directement sur cette page ou en suivant ce <a href="https://slot.adrien-syrotnik.fr" target="_blank">lien</a>.',
        template: `<iframe id='webgl_iframe' src="https://slot.adrien-syrotnik.fr"  width="810"
            height="700"></iframe>`,
      },
      {
        title: 'Animations et rendement',
        desc: "Afin d'apporter un réalisme accru à la machine à sous, j'ai intégré des animations. <br><br> Lorsque l'utilisateur démarre la machine, les rouleaux se mettent en mouvement, s'arrêtant un à un. Les gains de chaque tour s'affichent, et les crédits sont actualisés. En cas de gros gains, une animation spécifique est également déclenchée. <br><br> En ce qui concerne le rendement pour le joueur, celui-ci est fixé à 500% (soit 5€ pour chaque 1€ misé). Mon objectif était principalement d'offrir une expérience de jeu divertissante plutôt que réaliste. <br><br> Enfin, un bonus est disponible de manière aléatoire (avec une probabilité de 5%). Ce bonus permet d'obtenir entre 3 et 9 wilds (symboles jokers) sur la machine.",
        images: [
          'assets/images/projects/casino-ai/slot_1.png',
          'assets/images/projects/casino-ai/slot_2.png',
          'assets/images/projects/casino-ai/slot_3.png',
          'assets/images/projects/casino-ai/slot_4.png',
        ],
      },
    ],
    skills: ['svelte', 'python', 'ai'],
  },
  {
    key: 'minecraft_modding',
    portfolio: true,
    main_desc:
      'À l\'aide des commandes intégrés au jeu (datapack et command blocks), et à l\'aide d\'un ami, nous avons réalisé différents mini-jeux dans le jeu vidéo Minecraft. Vous pouvez retrouver nos créations sur <a href="https://linktr.ee/aidia_info" target="_blank">notre lientr.ee</a>.',
    image: 'assets/images/grass.png',
    low_desc: 'Réaliser des mini-jeux dans le jeu vidéo Minecraft',
    name: 'Modding Minecraft',
    year: new Date('2016-02'),
    yearEnd: new Date('2023-09'),
    parts: [
      {
        title: 'Lucky Block',
        desc: 'Reprise du célèbre mod <u>Lucky Block</u>, nous avons décidé de le recréer dans Minecraft. <br/><br/>Le but est simple : casser des blocs de chance qui peuvent vous donner des objets, des monstres ou encore des pièges.<br/><br/>Vous pouvez voir un exemple du jeu via la vidéo ci-jointe.',
        video: 'https://www.youtube.com/embed/6N_YOckSHXU?si=0V2ocIeqkTNrGp7L',
      },
      {
        title: 'SSL (Super Smash Licence)',
        desc: 'Inspiré du célèbre jeu Super Smash Bros, nous avons réalisé un jeu similaire avec des personnages du jeu vidéo qui nous tenaient à cœur.<br/><br/> <i>Link</i> de la série <u>The Legend of Zelda</u>, <i>Doomfist</i> du jeu <u>Overwatch</u>, <i>Edward Kenway</i> de la saga <u>Assassin\'s Creed</u> ou le personnage de notre jeu vidéo <a href="/project/emergency_exit">Emergency Exit</a>, nous avons créé un total de 10 personnages jouables aux capacités uniques !<br/><br/> Vous pouvez voir une démonstration à partir de la vidéo ci-jointe.',
        video: 'https://www.youtube.com/embed/wZZJa_QlNus',
      },
      {
        title: 'Mario Kart Minecraft',
        desc: "Pour ce projet, nous avions pour but de recopier exactement le jeu <u>Mario Kart</u>.<br/><br/>En passant par la construction des circuits, la reproduction des karts et le système d'objet, nous avons réussi à finalement reproduire ce jeu dans Minecraft.<br/><br/>Étant assez limités, nous avons utilisé des cochons en guise de kart par exemple.<br/><br/>Vous pouvez voir un exemple du jeu via la vidéo ci-jointe.",
        video: 'https://www.youtube.com/embed/0EbF0eRnaA8',
      },
      {
        title: 'Sheep Wars',
        desc: "Cette fois-ci, ce jeu n'est certainement pas connu de tout le monde. <u>SheepWars</u> était un mode de jeu que j'avais découvert sur un ancien serveur Minecraft. Ce jeu nous ayant manqués, et pour tester nos capacités, nous avons donc décidé de reproduire cet ancien mini-jeu.<br/><br/>Le but est assez simple : 2 équipes s'affrontent sur un terrain dans lequel nous pouvons obtenir des moutons que nous pouvons lancer et ayant certains pouvoirs.<br/><br/> Nous avons par exemple le <i>Mouton Incendiaire</i> qui est représenté sur les images ci-contre, qui après un certain temps explose et répand du feu autour de lui. Le but final : éliminer toute l'équipe adverse !",
        images: [
          'assets/images/sw_launch1.png',
          'assets/images/sw_launch2.png',
          'assets/images/sw_explo2.png',
          'assets/images/sw_explo1.png',
        ],
        //template: this.createCarousel('oui',[{desc:'oui', img :'assets/images/new_photo.jpg', title: ''},{desc:'oui', img :'assets/images/new_photo.jpg', title: ''}])
      },
    ],
    skills: ['equipe', 'recherche'],
    keywords: ['Command Blocks / Datapack', 'Game design'],
    more_info: true,
  },
  {
    key: 'online_resume_v2',
    github: 'https://github.com/adrien-syrotnik/CV-Syrotnik-V2',
    portfolio: true,
    main_desc:
      "Étant en plein stage concernant Angular, je voulais changer mon site web et en même temps progresser sur ce framework. J'ai donc décidé de le faire sous Angular, bien que cela ne reflète pas l'intégralité du framework. Un meilleur design, un dark mode et différentes traductions étaient mes principaux objectifs concernant ce projet.",
    image: 'assets/images/projects/cv-logo.png',
    low_desc: 'CV en ligne v2 (Angular)',
    name: 'Online resume v2',
    year: new Date('2022-01-30'),
    parts: [
      {
        title: 'Présentation',
        desc: "Faisant suite à mon premier <a href=\"/project/online_resume_v1\">site web</a> réalisé en HTML/CSS, j'ai décidé de le refaire en Angular. <br><br> Mon objectif était de réaliser un site web plus moderne, avec un meilleur design, un mode sombre et des traductions en plusieurs langues. <br><br> En plus de cela, j'ai hébergé mon site web sur un serveur personnel, plus précisément sur un Raspberry Pi 4. Cela m'a donc permis de m'améliorer sur la partie serveur et d'utiliser Docker Compose. <br><br> Grâce à ce serveur, j'ai pu également héberger d'autres services comme Traefik, mon <a href=\"/project/speedrun\">site de speedrun</a> ou encore mon <a href=\"/project/casino-ai\">casino en ligne</a>.",
      },
    ],
    skills: ['bootstrap', 'angular', 'docker', 'nodejs'],
    keywords: ['Angular', 'Web design'],
    more_info: true,
  },
  {
    portfolio: true,
    more_info: true,
    key: 'basketttooo',
    github: 'https://github.com/adrien-syrotnik/Basketttooo-Counting-Prototype',
    main_desc: "Réalisation d'un mini-jeu basé sur le basketball.",
    image: 'assets/images/projects/basketttooo-logo.png',
    low_desc: "Création d'un jeu de basket (Unity)",
    name: 'Basketttooo',
    year: new Date('2022-06-25'),
    parts: [
      {
        title: 'Réalisation',
        desc: 'Créé à l\'aide du logiciel Unity, <i>Baskettooo</i> est un mini-jeu où le joueur devra essayer de marquer le plus de panier possible pour amasser un maximum de point dans un temps imparti.<br><br>Celui-ci a été réalisé dans le cadre de mes leçons réalisées sur Unity Learn.<br><br>Vous pouvez jouer au jeu via ce <a href="https://play.unity.com/mg/other/webgl-builds-213907" target="_blank">lien</a>.',
        template: `<iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
            mozallowfullscreen="true" src="https://play.unity.com/webgl/07533c62-fd94-4775-828d-1d593af66945?screenshot=false&embedType=embed"  width="810"
            height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>`,
      },
    ],
    skills: ['unity', 'csharp', 'recherche'],
  },
  {
    portfolio: true,
    more_info: true,
    key: 'tuto-tank',
    main_desc:
      "Réalisation d'un tutoriel sur Unity me permettant de créer un jeu de tank en local.",
    image: 'assets/images/tuto-tank.png',
    low_desc: "Démo d'un jeu de tank (Unity)",
    name: 'Tanks!',
    year: new Date('2022-06'),
    parts: [
      {
        title: 'Réalisation',
        desc: 'Créé à l\'aide du logiciel Unity, <i>Tanks!</i> est un mini-jeu multijoueur où 2 joueurs s\'affrontent sur une même machine.<br><br>Celui-ci a été réalisé à l\'aide d\'un tutoriel sur Unity Learn.<br><br>Vous pouvez le télécharger <a href="assets/dl/Tanks!.zip" download="Tanks!.zip">ici</a> (Windows uniquement).',
        video: 'https://www.youtube.com/embed/S18ViemFLXc',
      },
    ],
    skills: ['unity', 'csharp'],
  },
  {
    key: 'emergency_exit',
    portfolio: true,
    main_desc:
      "Réalisé en processing (langage dérivé du java), j'ai réalisé avec un ami (Arthur Joris), un petit jeu de A à Z. Celui-ci devait être présenté à notre BAC, car il représentait notre note final en ISN (Informatique et Science du Numérique).",
    image: 'assets/images/emergency-logo.png',
    low_desc: 'Mini jeu vidéo, projet de terminal',
    name: 'Emergency Exit',
    year: new Date('2019-02'),
    parts: [
      {
        title: 'Présentation et téléchargement',
        desc: 'Emergency Exit est le nom que nous avons donné à ce jeu. Le but est très simple : s\'enfuir.<br/><br/> Nous voulions réaliser ce jeu de A à Z, ainsi nous devions confectionner le gameplay, les images ou encore la physique du jeu en lui-même sur Processing, un langage spécialisé dans le graphisme.<br/><br/>Après plusieurs mois, nous avions enfin terminé notre tout premier jeu vidéo sous le nom de groupe "Aidia Info".<br/><br/> Celui-ci dure à peu près 15min, donc si l\'envie vous prend, vous pouvez jouer à notre jeu en le téléchargeant avec ce <a href="assets/dl/Emergency Exit by Aidia Info.zip" download="Emergency Exit by Aidia Info.zip">lien</a> (Windows uniquement).',
        images: [
          'assets/images/emergency_lvl1.PNG',
          'assets/images/emergency_lvl2.PNG',
          'assets/images/emergency-intro.png',
          'assets/images/emergency_end.PNG',
        ],
      },
      {
        title: 'Un jeu gravé !',
        desc: 'Après avoir terminé le jeu, nous voulions aller plus loin et avons décidé de graver notre jeu sur un CD. <br/><br/>Ainsi, nous avons réalisé 2 CD nous permettant de garder notre jeu sous format physique.',
        images: [
          'assets/images/emergency_cd1.jpg',
          'assets/images/emergency_cd2.jpg',
        ],
      },
    ],
    skills: ['processing', 'equipe', 'recherche'],
    keywords: ['POO', 'Game design'],
    more_info: true,
  },
  {
    key: 'speedrun',
    portfolio: true,
    main_desc:
      "Souhaitant réaliser un speedrun sur le jeu Emergency Exit, et étant donné que le site de speedrun.com est très limité, j'ai décidé de réaliser un site web qui va permettre de réaliser des speedruns sur ce jeu. <br/><br/>En plus de cela, j'ai réalisé des scripts permettant de se chronométrer lorsque l'on souhaite réaliser un speedrun.",
    image: 'assets/images/speedrun-logo.png',
    low_desc:
      'Reproduction du site speedrun.com et réalisation de scripts de speedrun',
    name: 'Speedrun',
    year: new Date('2022-04'),
    parts: [
      {
        title: 'Un site web : un backend et un frontend',
        desc: 'Pour réaliser ce projet, il fallait pouvoir stocker les informations dans une base de données, et il fallait donc réaliser un backend en plus du frontend. J\'ai décidé de réaliser le backend en utilisant le framework Express.js, et le frontend en utilisant Angular.js. <br/><br/> Le frontend s\'est également fait en collaboration avec Arthur Joris, la même personne ayant développée Emergency Exit avec moi. <br/><br/>Vous pouvez retrouver le site web via le lien suivant : <a href="https://cv.adrien-syrotnik.fr/speedrun" target="_blank">cv.adrien-syrotnik.fr/speedrun</a>',
        images: [
          'assets/images/speedrun-site1.png',
          'assets/images/speedrun-site2.png',
        ],
      },
      {
        title: 'Comment chronométrer précisément ?',
        desc: "Une des problématiques que j'ai rencontrée lors de la réalisation de ce projet est de pouvoir réaliser un chronomètre précis. <br/><br/>J'ai donc décidé de réaliser un script qui permet de réaliser un chronomètre précis. <br/><br/> La méthode consistait à récupérer les pointeurs d'adresses utilisés par l'application puis de les utiliser dans un script permettant de les interpréter et d'activer ou non le chronomètre. </br></br> J'ai réalisé une vidéo à ce sujet : <a href=\"https://youtu.be/TrgG9KnDgK8\" target=\"_blank\">https://youtu.be/TrgG9KnDgK8</a>",
        images: [
          'assets/images/speedrun-credit.png',
          'assets/images/cheat-engine.png',
          'assets/images/speedrun-script.png',
        ],
      },
    ],
    skills: ['nodejs', 'angular', 'cheatengine', 'equipe'],
    keywords: [
      'Recréer',
      'NodeJS / Express',
      'API REST',
      'Adresse mémoire',
      'Speedrun',
    ],
    more_info: true,
  },
  {
    key: 'online_resume_v1',
    github: 'https://github.com/adrien-syrotnik/CV-Syrotnik-V1',
    portfolio: true,
    main_desc:
      'Hébergé sur github, ce premier cv marque mon début dans le monde du web. Vous pouvez aller jeter un coup d\'œil avec ce lien : <a href="https://adrien-syrotnik.github.io/CV-Syrotnik-V1/" target="_blank">https://adrien-syrotnik.github.io/CV-Syrotnik-V1/</a>.',
    image: 'assets/images/resume.png',
    low_desc: 'CV en ligne v1 (HTML CSS JS)',
    name: 'Online resume v1',
    year: new Date('2021-02'),
    skills: ['bootstrap', 'javascript'],
    keywords: ['HTML / CSS / JS', 'PWA'],
    more_info: true,
  },
  {
    key: 'throw_rock',
    main_desc:
      "Un de mes principaux objectifs est de travailler dans le domaine du jeu-vidéo, et j'ai donc commencé à réaliser un jeu où on doit lancer des pierres. Bien que le jeu ne soit pas trop avancé, j'ai pour ambition de réaliser un jeu plus tard.",
    image: 'assets/images/unity-test.png',
    low_desc: "Début d'un jeu sur Unity",
    name: 'Throw Rock',
    year: new Date('2020-02'),
    parts: [
      {
        title: 'Un test sur le moteur Unity',
        desc: "Étant très intéressé par le domaine du jeu vidéo, je m'étais intéressé aux différents moteurs de jeu existant sur le marché. <br/><br/> UnrealEngine, CryEngine, Unity, c'est donc sur ce dernier que je me suis penché pour réaliser un petit jeu test.<br/><br/> L'idée de départ était que des monstres apparaissent dans une sorte de grotte et que notre personnage doit leur lancer des projectiles pour les arrêter.<br/><br/>La vidéo suivante représente une démo de ce que j'imaginais avec ce qui semble être un gobelin et des pierres en guise de projectile.",
        video: 'https://www.youtube.com/embed/iTcdKPDxxeI',
      },
    ],
    skills: ['c#', 'unity', 'recherche'],
  },
  {
    key: 'minesweeper',
    portfolio: true,
    main_desc:
      "Souhaitant me mettre au défi, j'ai souhaité réaliser mon propre démineur, un jeu iconique.",
    image: 'assets/images/demineur.png',
    low_desc: 'Un simple démineur (Processing)',
    name: 'Minesweeper',
    year: new Date('2020-02'),
    parts: [
      {
        title: 'Explication et téléchargement',
        desc: 'Programmé en <u>Processing</u>, un dérivé du Java, j\'ai réussi à réaliser un démineur 100% fonctionnel. Vous pouvez noter où se trouvent les bombes à l\'aide de click droit, et il existe aussi un système "anti-malchance" pour éviter de tomber sur une bombe dès le premier coup.<br/><br/>Vous pouvez apercevoir un aperçu avec l\'image ci-contre, mais si vous souhaitez tester mon démineur, vous pouvez le télécharger <a href="assets/dl/Démineur by Adrien Syrotnik.zip" download="Démineur by Adrien Syrotnik.zip">ici</a> (Windows uniquement).',
        template: '<img src="assets/images/demineur.gif">',
      },
    ],
    skills: ['recherche', 'processing'],
    keywords: ['Recréer', 'POO'],
    more_info: true,
  },
  {
    key: 'animator',
    main_desc:
      "Le but de cette application était de créer des animations facilement. Je voulais animer des petites idées facilement sans prise de tête, mais je ne connaissais pas de logiciel permettant de faire cela, j'ai donc décidé de créer le mien.",
    image: 'assets/images/animator.png',
    low_desc: "Logiciel d'animation (Processing)",
    name: 'Animator',
    year: new Date('2020-02'),
    parts: [
      {
        title: 'Explication et téléchargement',
        desc: 'Créé avec le langage <u>Processing</u>, un dérivé du Java, le principe est le suivant : pouvoir créer des points que l\'on peut relier entre eux, puis de pouvoir changer leurs positions dans le temps. Enfin, il suffit de lancer la lecture et le tour est joué !<br/><br/> Comme vous pouvez le voir, j\'ai créé cette petite animation ci-contre, à l\'aide du logiciel.<br/><br/>Si vous voulez l\'essayer, téléchargez-le <a href="assets/dl/Animator by Adrien Syrotnik.zip" download="Animator by Adrien Syrotnik.zip">ici</a> (Windows uniquement).',
        template: '<img src="assets/images/animator.gif" class="w-100">',
      },
    ],
    skills: ['recherche', 'processing'],
  },
];
