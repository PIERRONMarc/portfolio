interface ProjectItemProps {
    title: string,
    year: string,
    category: 'Personal' | 'Work' | 'School',
    tags?: string[]
}

function ProjectItem(props: ProjectItemProps) {

    const {title, tags, year, category} = props;

    return (
        <div className="py-5 flex flex-col md:py-8">
            <div className="flex flex-col md:flex-row md:items-start">
                <div className="font-roboto font-thin text-sm md:order-2 md:pt-1 md:ml-2 pl-1 md:pl-0">
                    {year}. <span className="text-accent">{category}</span>
                </div>

                <div className="text-5xl md:text-7xl">
                    {title}
                </div>
            </div>

            <div className="flex flex-row justify-start flex-wrap mt-4">
                {tags?.map((tag: string, key: number) => (
                    <div key={key} className="text-xs rounded-full bg-secondary inline-block px-4 py-2 mr-2 whitespace-nowrap mb-2">
                        {tag}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectItem;