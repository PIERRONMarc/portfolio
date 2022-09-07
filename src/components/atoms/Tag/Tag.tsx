interface TagProps {
    children: string
}

function Tag(props: TagProps) {

    const { children } = props;

    return (
        <div className="text-primary text-xs rounded-full bg-secondary inline-block px-4 py-2 mr-2 whitespace-nowrap mb-2">
            {children}
        </div>
    )
}

export default Tag;