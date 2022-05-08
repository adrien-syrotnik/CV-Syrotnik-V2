import { Skill } from "./skill";

export interface Project extends PortfolioProject {

    parts? : {
        title?:string,
        desc:string;
        template?:string;
        video?:string | any;
    }[],
    portfolio? :boolean
}


export interface PortfolioProject {

    key : string,
    name : string,
    image: string,
    main_desc: string,
    low_desc: string,
    year?: Date,
    yearEnd?: Date,
    frames? : string[],
    keywords? : string[],
    skills? : Skill[],
    more_info? : boolean

}