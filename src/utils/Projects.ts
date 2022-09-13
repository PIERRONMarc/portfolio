import imageComingSoon from '../assets/image-coming-soon.png';
import {
    CarWithdrawedScreen,
    CarCheckout1Screen,
    CarCheckout2Screen,
    CarCheckout3Screen,
    HomeScreen,
    CarInfoScreen,
    LoginScreen
} from '../assets/images/reserve-ta-caisse';
import {
    HomeScreen as MusicallHomeScreen,
    HomeMobileScreen,
    RoomScreen,
    RoomMobileScreen
} from '../assets/images/musicall';
import {
    BackCategoryFormScreen,
    BackCategoryIndexScreen,
    BackConsommableIndexScreen,
    FrontToolIndexScreen,
    FrontInformationScreen,
    FrontConsommableScreen,
    FrontFaqScreen,
    BackInformationScreen,
    BackToolIndexScreen,
    BackFaqFormScreen,
    BackFaqIndexScreen,
    FrontCategoryIndexScreen,

} from '../assets/images/labboite';
import {
    DemandeListScreen,
    DetailScreen,
    AuditEventsScreen,
    HomeScreen as ALOHAHomeScreen,
    ProfilMetier1Screen,
    ProfilMetier2Screen,
    ProfilMetier3screen
} from '../assets/images/aloha';

export interface Project {
    title: string,
    year: string,
    category: 'Work'|'Personal'|'School',
    preview: string,
    screens: string[],
    description: string,
    tags?: string[],
    codeLink?: string,
    seeMoreLink?: string,
    uri: string
}

export const projects: Project[] = [{
    uri: 'aloha',
    title: 'ALOHA',
    year: '2022',
    category: 'Work',
    tags: [
        'Mockup integration',
        'PostgreSQL',
        '#Responsive',
        'Mockup & Prototype',
        'Symfony',
        'Database architecture design'
    ],
    preview: ALOHAHomeScreen,
    screens: [
        ALOHAHomeScreen,
        ProfilMetier1Screen,
        ProfilMetier2Screen,
        ProfilMetier3screen,
        DetailScreen,
        DemandeListScreen,
        AuditEventsScreen
    ],
    description: "ALOHA is a workflow to handle applications permissions requests. While still in testing phase, it will be used by many \"CPAM\" accross France. Being the first project of this scale, i learned a lot of valuable things in terms of optimisation, maintainability, testing and soft skills."
}, {
    uri: 'labboite',
    title: 'LABBOITE',
    year: '2020',
    category: 'School',
    tags: [
        'Symfony',
        'Mockup integration',
        'MySQL',
        'Database architecture design',
        'Docker',
        '#Responsive',
    ],
    preview: FrontToolIndexScreen,
    screens: [
        FrontToolIndexScreen,
        BackToolIndexScreen,
        FrontCategoryIndexScreen,
        BackCategoryIndexScreen,
        BackCategoryFormScreen,
        FrontInformationScreen,
        BackInformationScreen,
        FrontConsommableScreen,
        BackConsommableIndexScreen,
        FrontFaqScreen,
        BackFaqIndexScreen,
        BackFaqFormScreen
    ],
    description: 'A website to list and present machines, tools and softwares available in LabBoîte, fablab of Cergy-Pontoise. I learned to work hand to hand with a web designer to integrate the mockups he did. Me and my team were also in charge of creating the backend associated with them (mostly CRUDs i concede).',
    codeLink: 'https://github.com/PIERRONMarc/labboite-documentation',
}, {
    uri: 'music-all',
    title: "MUSIC'ALL",
    year: '2022',
    category: 'Personal',
    tags: [
        'Symfony',
        'API REST',
        'MongoDB',
        'Database architecture design',
        'Docker',
        'Continuous Integration',
        'Mockup',
        'Mockup integration',
        'React',
        '#Responsive',
        '#MobileFirst',
        'Atomic design',
        '#TDD'
    ],
    preview: MusicallHomeScreen,
    screens: [
        MusicallHomeScreen,
        RoomScreen,
        HomeMobileScreen,
        RoomMobileScreen
    ],
    description: "Music'all is a social platform allowing people to listen music together. Born from a need to share music with my friends, \"Music'All\" is one of my latest side projects that I use to try new concepts, techs and skills freshly learned. Being a work in progress, what you see below are mockups.",
    codeLink: 'https://github.com/PIERRONMarc/music-all/tree/develop'
}, {
    uri: 'reserve-ta-caisse',
    title: 'Réserve ta caisse',
    year: '2021',
    category: 'Work',
    tags: [
        'Symfony',
        'API REST',
        'React Native',
        'Database architecture design',
        'MySQL'
    ],
    preview: CarWithdrawedScreen,
    screens: [
        LoginScreen,
        HomeScreen,
        CarWithdrawedScreen,
        CarInfoScreen,
        CarCheckout1Screen,
        CarCheckout2Screen,
        CarCheckout3Screen
    ],
    description: "\"Réserve ta caisse\" helps CPAM employees with their travel. Available on Android and IOS, I diversified my knowledge by developing and deploying on mobile with web technologies. This project allowed to put my hand on the famous React library which i never gave up after. I also had to create the backend, an API REST consumed by the mobile app.",
    seeMoreLink: 'https://reservetacaisse.cpam-versailles.fr/documentation/'

}, {
    uri: 'open-api-document-generator',
    title: 'Open API document generator',
    year: '2022',
    category: 'School',
    tags: [
        'Symfony',
        'Docker',
        'Message queues',
        'Infrastructure as code',
        'Cloud (AWS)',
        '#TDD',
        'Continuous integration',
        'MySQL',
        'System design'
    ],
    preview: imageComingSoon,
    screens: [
        imageComingSoon,
    ],
    description: 'A Symfony worker that generates OpenAPI documents based on the 3.0 OpenAPI specification.  While i would probably do this project differently now (app is too much coupled with OpenAPI specification), I learned a lot about "Infrastructure as Code" by deploying it on AWS with Terraform. I also had the opportunity to practice Test Driven Development which has significantly change the way I see web development now.',
    codeLink: 'https://github.com/PIERRONMarc/openapi-document-generator'
}]