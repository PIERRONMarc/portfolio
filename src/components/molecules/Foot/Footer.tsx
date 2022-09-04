import HtmlTag from "../../atoms/HtmlTag/HtmlTag";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

interface FooterProps {
    className?: string
}

function Footer(props: FooterProps) {

    const {className} = props;

    return (
        <footer className={`flex flex-col sm:flex-row sm:items-end sm:justify-between ${className}`}>
            <div className="ml-5 text-secondary text-5xl sm:text-7xl flex flex-row items-end sm:order-3">
                <a href="https://www.linkedin.com/in/marc-pierron" target="_blank" className="mr-5 hover:text-accent ease-in duration-150">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/PIERRONMarc" target="_blank" className="hover:text-accent ease-in duration-150">
                    <FaGithubSquare />
                </a>
            </div>

            <div className="font-la-belle-aurore text-html-tag ml-5 my-5 sm:order-2 sm:my-0">
                &lt;!-- Copyright @ 2022 PIERRON Marc --&gt;
            </div>

            <div className="sm:order-1">
                <HtmlTag className="block ml-5">&lt;/body&gt;</HtmlTag>
                <HtmlTag>&lt;/html&gt;</HtmlTag>
            </div>
        </footer>
    )
}

export default Footer;