import ProjectItem from "../../atoms/ProjectItem/ProjectItem";
import {useEffect, useState} from "react";
import ProjectPreview from "../../atoms/ProjectPreview/ProjectPreview";
import {Project, projects} from "./ProjectsData";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<{x: number, y:number}>({x: 0, y: 0})

    useEffect(() => {
        const updateMousePosition = (event:any)  => {
            setMousePosition({x: event.clientX, y: event.clientY});
        }
        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, [])

    return mousePosition;
}


function ProjectList() {
    const [hoveredProject, setHoveredProject] = useState<number>(-1);
    const {x, y} = useMousePosition();

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
                {projects.map((project: Project, index:number) => {
                    if (index === hoveredProject) {
                        return (
                            <ProjectPreview
                                mousePosition={{x, y}}
                                key={index}
                                url={project.preview}
                            />
                        )
                    }
                })}
            </div>

            <div className="text-primary font-montserrat font-extrabold mt-5 divide-y divide-white">
                {projects.map((project: Project, index: number) => (
                    <ProjectItem
                        title={project.title}
                        year={project.year}
                        category={project.category}
                        setHoveredProject={setHoveredProject}
                        index={index}
                        tags={project.tags}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;