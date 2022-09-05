import labboitePreview from './assets/labboite.png';

export interface Project {
    title: string,
    tags?: string[],
    year: string,
    category: 'Work'|'Personal'|'School',
    preview: string
}

export const projects: Project[] = [{
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
    preview: labboitePreview
}, {
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
    preview: labboitePreview
}, {
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
    preview: labboitePreview
}, {
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
    preview: labboitePreview
}, {
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
    preview: labboitePreview
}]