import {useState} from "react";

interface MediaProps {
    mousePosition: {x: number, y: number},
    url: string
}

function ProjectPreview(props: MediaProps) {
    const {mousePosition, url} = props;
    const [{width, height}, setDimensions] = useState({width: 0, height: 0});

    const onImgLoad = (event:any) => {
        const { offsetHeight, offsetWidth } = event.target;
        setDimensions({
            width: offsetWidth,
            height: offsetHeight
        });
    };

    return (
        <img
            onLoad={onImgLoad}
            src={url}
            className="absolute w-2/3 md:w-1/2 xl:w-1/3 h-auto"
            style={{transform: `translate(${mousePosition.x - width/2}px, ${mousePosition.y - height/2}px)`}}
            alt="project preview"
        />
    )
}

export default ProjectPreview;