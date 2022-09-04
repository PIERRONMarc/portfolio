import Header from "../../molecules/Header/Header";
import Skills from "../../molecules/Skills/Skills";
import TiltedSection from "../../atoms/TiltedSection/TiltedSection";
import AboutMe from "../../atoms/AboutMe/AboutMe";
import Quote from "../../atoms/Quote/Quote";
import MyWork from "../../molecules/MyWork/MyWork";
import Footer from "../../molecules/Footer/Footer";

function HomePage() {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-0">
                <Header />
            </div>
            <main>
                <div className="container mx-auto px-4 sm:px-0">
                    <Skills />
                </div>
                <TiltedSection>
                    <AboutMe className="mb-3 sm:mb-5"/>
                    <Quote />
                </TiltedSection>
                <div className="container mx-auto px-4 sm:px-0">
                    <MyWork className="mt-12" />
                </div>
            </main>
            <div className="container mx-auto px-4 sm:px-0">
                <Footer className="my-5" />
            </div>
        </>

    )
}

export default HomePage;