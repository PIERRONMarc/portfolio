import {ReactElement} from "react";

interface TiltedSectionProps {
    children:
        | ReactElement
        | ReactElement[];
}

function TiltedSection(props: TiltedSectionProps) {
    const {children} = props;

    return (
        <>
            <div className="text-primary bg-secondary pt-5 pb-5 sm:pt-10 sm:pb-10 relative before:absolute before:block before:-top-2.5 before:h-8 before:rotate-1 before:w-full before:bg-secondary before:overflow-hidden after:absolute after:block after:-bottom-2.5 after:h-8 after:rotate-1 after:w-full after:bg-secondary after:overflow-hidden">
                <div className="container mx-auto px-4 sm:px-0">
                    {children}
                </div>
            </div>
        </>

    )
}

export default TiltedSection;