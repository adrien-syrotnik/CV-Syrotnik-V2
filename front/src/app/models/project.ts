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
    github? :string,
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



export interface ProjectTemplate {

    key : string,
    portfolio? :boolean,
    github? :string,
    name : string,
    image: string,
    main_desc: string,
    low_desc: string,
    year?: Date,
    yearEnd?: Date,
    keywords? : string[],
    skills? : string[],
    more_info? : boolean,
    parts? : {
        title?:string,
        desc:string,
        template?:string,
        video?:string | any,
        images?:string[]
    }[],
    
}