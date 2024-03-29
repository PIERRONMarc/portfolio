import {MouseEventHandler} from "react";
import {Link} from "react-router-dom";
import TagList from "../../molecules/TagList/TagList";

interface ProjectItemProps {
    title: string,
    year: string,
    category: 'Personal' | 'Work' | 'School',
    tags?: string[],
    uri: string,
    onMouseLeave: MouseEventHandler<HTMLDivElement>
    onMouseEnter: MouseEventHandler<HTMLDivElement>
}

function ProjectItem(props: ProjectItemProps) {

    const {title, tags, year, category, uri, onMouseLeave, onMouseEnter} = props;

    return (
        <div className="py-5 flex flex-col md:py-8">
            <div className="flex flex-col md:flex-row md:items-start">
                <div className="font-roboto font-thin text-sm md:order-2 md:pt-1 md:ml-2 pl-1 md:pl-0">
                    {year}. <span className="text-accent">{category}</span>
                </div>

                <div
                    className="text-5xl md:text-7xl cursor-pointer"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to={uri} >{title}</Link>
                </div>
            </div>

            {tags && (
                <TagList tags={tags} className="mt-4" />
            )}

        </div>
    )
}

export default ProjectItem;