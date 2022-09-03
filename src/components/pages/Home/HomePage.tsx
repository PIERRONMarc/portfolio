import Hero from "../../molecules/Hero/Hero";
import Skills from "../../molecules/Skills/Skills";
import TiltedSection from "../../atoms/TiltedSection/TiltedSection";
import AboutMe from "../../atoms/AboutMe/AboutMe";
import Quote from "../../atoms/Quote/Quote";

function HomePage() {
    return (
        <>
            <header>
                <div className="container mx-auto px-4 sm:px-0">
                    <Hero />
                </div>
            </header>
            <main>
                <div className="container mx-auto px-4 sm:px-0">
                    <Skills />
                </div>
                <TiltedSection>
                    <AboutMe className="mb-3 sm:mb-5"/>
                    <Quote />
                </TiltedSection>
            </main>
        </>

    )
}

export default HomePage;