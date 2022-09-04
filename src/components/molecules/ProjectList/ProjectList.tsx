import ProjectItem from "../../atoms/ProjectItem/ProjectItem";

function ProjectList() {
    return (
        <div className="text-primary font-montserrat font-extrabold mt-5 divide-y divide-white">
            <ProjectItem
                title="ALOHA"
                year="2022"
                category="Work"
                tags={[
                'Mockup integration',
                'PostgreSQL',
                '#Responsive',
                'Mockup & Prototype',
                'Symfony',
                'Database architecture design'
            ]}/>
            <ProjectItem
                title="LABBOITE"
                year="2020"
                category="School"
                tags={[
                'Symfony',
                'Mockup integration',
                'MySQL',
                'Database architecture design',
                'Docker',
                '#Responsive',
            ]} />
            <ProjectItem
                title="MUSIC'ALL"
                year="2022"
                category="Personal"
                tags={[
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
            ]} />
            <ProjectItem
                title="Réserve ta caisse"
                year="2021"
                category="Work"
                tags={[
                'Symfony',
                'API REST',
                'React Native',
                'Database architecture design',
                'MySQL'
            ]} />
            <ProjectItem
                title="Open API document generator"
                year="2022"
                category="School"
                tags={[
                'Symfony',
                'Docker',
                'Message queues',
                'Infrastructure as code',
                'Cloud (AWS)',
                '#TDD',
                'Continuous integration',
                'MySQL',
                'System design'
            ]} />
        </div>
    )
}

export default ProjectList;