export interface Project {
    key : string,
    name : string;
    image: string;
    main_desc: string;
    low_desc: string;
    year?: Date;
    yearEnd?: Date,
    parts? : {
        title?:string,
        desc:string;
        template?:string;
        video?:string | any;
    }[]
}