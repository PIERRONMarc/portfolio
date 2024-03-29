import HtmlTag from "../../atoms/HtmlTag/HtmlTag";
import {HiOutlineArrowNarrowDown} from "react-icons/hi";
import Header from "../Header/Header";

function Hero() {
    return (
        <section className="flex flex-col justify-between h-full">
            <Header />

            <div className="flex flex-col items-center text-center">
                <h1 className="text-primary font-monserrat text-4xl md:text-7xl"><HtmlTag className="hidden sm:inline">&lt;h1&gt;</HtmlTag> Hi, I'm <span className="text-accent">Marc.</span> <HtmlTag className="hidden sm:inline">&lt;/h1&gt;</HtmlTag></h1>
                <h2 className="text-secondary text-lg md:text-3xl md:mt-3"><HtmlTag className="hidden sm:inline">&lt;h2&gt;</HtmlTag> I’m a T-shaped web developer <span className="whitespace-nowrap">based in France <HtmlTag className="hidden sm:inline">&lt;/h2&gt;</HtmlTag></span></h2>
            </div>

            <div className="text-primary flex flex-col items-center">
                <div>T-shaped ?</div>
                <HiOutlineArrowNarrowDown className="m-2"/>
            </div>
        </section>
    )
}

export default Hero;