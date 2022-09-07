import HtmlTag from "../../atoms/HtmlTag/HtmlTag";
import {Link} from "react-router-dom";

interface HeaderProps {
    showHomeLink?: boolean
}

function Header(props: HeaderProps) {

    const { showHomeLink } = props;

    return (
        // <header className="pt-5">
        //     <HtmlTag className="block">&lt;html&gt;</HtmlTag>
        //     <HtmlTag className="ml-5">&lt;body&gt;</HtmlTag>
        //
        // </header>

        <header className="flex flex-row justify-between">
            <div className="pt-5">
                <HtmlTag className="block">&lt;html&gt;</HtmlTag>
                <HtmlTag className="ml-5">&lt;body&gt;</HtmlTag>
            </div>

            {showHomeLink && (
                <div className="mt-5">
                    <Link to="/" className="text-primary font-montserrat underline hover:no-underline hover:text-accent ease-in duration-150">Home</Link>
                </div>
            )}
        </header>
    )
}

export default Header;