import Footer from "../../molecules/Footer/Footer";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Keyboard} from "swiper";
import {useEffect} from "react";
import {Project} from "../../../utils/Projects";
import Header from "../../molecules/Header/Header";
import TagList from "../../molecules/TagList/TagList";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectPageProps {
    project: Project
}

function ProjectPage(props: ProjectPageProps) {

    const {project: {description, title, year, category, tags, screens, seeMoreLink, codeLink}} = props;
    useEffect(() => {
        // done it this way to preserve tailwind theme with swiper
        const activeBullet = document.getElementsByClassName("swiper-pagination-bullet-active")[0];
        document.documentElement.style.setProperty("--swiper-theme-color", window.getComputedStyle(activeBullet).backgroundColor);
    }, [])

    return (
        <>
            <div className="container mx-auto px-4 sm:px-0">
                <Header showHomeLink={true} />
                <main>
                    <div className="text-primary flex flex-col md:flex-row md:items-start mt-10 mb-2">
                        <div className="font-roboto font-thin text-sm md:order-2 md:pt-1 md:ml-2 pl-1 md:pl-0">
                            {year}. <span className="text-accent">{category}</span>
                        </div>

                        <div className="text-5xl md:text-7xl cursor-pointer">
                            {title}
                        </div>
                    </div>

                    {tags && (
                        <TagList tags={tags} className="mb-10" />
                    )}

                    <p className="text-primary mb-10">{description}</p>

                    {codeLink && (
                        <p className={"text-primary font-montserrat mb-5"}>
                            <a href={codeLink} rel="noreferrer" target="_blank" className=" underline hover:no-underline hover:text-accent ease-in duration-150">See code</a>
                        </p>
                    )}

                    {seeMoreLink && (
                        <p className={"text-primary font-montserrat mb-5"}>
                            <a href={seeMoreLink} rel="noreferrer" target="_blank" className=" underline hover:text-accent hover:no-underline ease-in duration-150">See more</a>
                        </p>
                    )}

                    <Swiper
                        keyboard={true}
                        navigation={true}
                        pagination={{
                            bulletActiveClass: "!bg-accent swiper-pagination-bullet-active"
                        }}
                        modules={[Navigation, Pagination, Keyboard]}
                        className="mb-10"
                    >
                        {screens.map((screen: string, key: number) => (
                            <SwiperSlide key={key}><img src={screen} alt="project screen" className="mx-auto" style={{maxWidth: '100%', maxHeight: '80vh'}}/></SwiperSlide>
                        ))}
                    </Swiper>
                </main>
                <Footer className="my-5" />
            </div>
        </>
    )
}

export default ProjectPage;