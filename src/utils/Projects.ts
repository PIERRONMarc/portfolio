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
    preview: imageComingSoon,
    screens: [
        imageComingSoon
    ],
    description: 'Description coming soon'
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
    description: 'A website to list and present machines, tools and softwares available in LabBoîte, fablab of Cergy-Pontoise.',
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
    description: "Music'all is a social platform allowing people to listen music together.",
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
    description: '"Réserve ta caisse" helps CPAM employees with their travel.',
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
    description: 'A Symfony worker that generates OpenAPI documents based on the 3.0 OpenAPI specification.',
    codeLink: 'https://github.com/PIERRONMarc/openapi-document-generator'
}]