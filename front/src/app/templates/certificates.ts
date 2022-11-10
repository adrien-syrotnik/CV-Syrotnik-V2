import { Certificate } from "../models/certificate";

export const certificates : Certificate[] = [
    {
        date : new Date('2022-06-26'),
        name : 'Unity Junior Programmer',
        url : 'https://www.credly.com/badges/a62c57ac-0c47-4a09-9b56-d9ab5755bf1f',
        delivered_by : {
            name : 'Unity Technologies',
            url : 'https://unity.com/'
        },
        image : 'assets/images/certificates/Junior_Programmer-Pathway_Badge.png'
    },
    {
        date : new Date('2022-09-11'),
        name : 'Unity VR Development Pathway',
        url : 'https://www.credly.com/earner/earned/badge/602a2609-c0ba-44fc-a306-e95230e2a6de',
        delivered_by : {
            name : 'Unity Technologies',
            url : 'https://unity.com/'
        },
        image : 'assets/images/certificates/Unity_VR_Development_Pathway_Badge.png'
    },
    {
        date : new Date('2022-06-18'),
        name : 'Unity Essentials Pathway',
        url : 'https://www.credly.com/badges/60cdb612-a4d8-4df4-bb51-38b67eb8f099',
        delivered_by : {
            name : 'Unity Technologies',
            url : 'https://unity.com/'
        },
        image : 'assets/images/certificates/Unity_Essentials-Pathway_Badge.png'
    },
    {
        date : new Date('2021-01-07'),
        name : 'The Ultimate Guide to 2D Mobile Game Development with Unity',
        url : 'https://www.udemy.com/certificate/UC-c7dbdc91-45f4-41bc-893e-3a75f437ebe1/',
        delivered_by : {
            name : 'Udemy',
            url : 'https://www.udemy.com/'
        },
        image : 'assets/images/certificates/udemy_2D_mobile_Unity.jpg'
    }
];