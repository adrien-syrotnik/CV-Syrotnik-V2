import { ExperienceOrFormation } from "../models/experience_or_formation";

export const experiences: ExperienceOrFormation[] = [
  {
    key: 'SINORTICA',
    date_begin: new Date("2026-01-05"),
    date_end: undefined,
    image: 'assets/images/sinortica.png',
    company: 'Sinortica',
  },
  {
    key: 'BERTRANDT-SAS-CDI',
    date_begin: new Date("2024-09-07"),
    date_end: new Date("2025-12-20"),
    image: 'assets/images/bertrandt.png',
    company: 'Bertrandt SAS (CDI)'
  },
  {
    key: 'CESI',
    date_begin: new Date("2019-09"),
    date_end: new Date("2024-09"),
    image: 'assets/images/CESI.png',
    company: 'CESI'
  },
  {
    key: 'BERTRANDT-SAS-ALTERNANCE',
    date_begin: new Date("2023-09-04"),
    date_end: new Date("2024-09-06"),
    image: 'assets/images/bertrandt.png',
    company: 'Bertrandt SAS'
  },
  {
    key: 'UNIVERSITE-TECHNIQUE-CLUJ-NAPOCA',
    date_begin: new Date("2022-09-19"),
    date_end: new Date("2023-02"),
    image: 'assets/images/universite-techno-cluj.png',
    company: 'Université technique de Cluj-Napoca'
  },
  {
    key: 'FLEXNETWORK',
    date_begin: new Date("2022-01-02"),
    date_end: new Date("2022-04"),
    image: 'assets/images/flexnetwork.png',
    company: 'FlexNetwork'
  }, {
    key: 'ADEE',
    date_begin: new Date("2021-03"),
    date_end: new Date("2021-06"),
    image: 'assets/images/adee.png',
    company: 'ADEE Electronic'
  }]