interface HtmlTagProps {
    children: string,
    className?: string
}

function HtmlTag(props: HtmlTagProps) {
    const { children, className } = props;

    return (
        <span className={`font-la-belle-aurore text-html-tag text-base ${className}`}>{children}</span>
    )
}

export default HtmlTag;