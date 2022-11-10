import { ExperienceOrFormation } from "../models/experience_or_formation";

export const experiences: ExperienceOrFormation[] = [
    {
      key: 'CESI',
      date_begin: new Date("2019-09"),
      date_end: new Date("2024-09"),
      image: 'assets/images/CESI.png',
      company: 'CESI'
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