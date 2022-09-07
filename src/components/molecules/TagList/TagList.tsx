import Tag from "../../atoms/Tag/Tag";

interface TagProps {
    tags: string[],
    className: string
}

function TagList(props: TagProps) {

    const { tags, className } = props;

    return (
        <div className={`flex flex-row justify-start flex-wrap ${className}`}>
            {tags?.map((tag: string, key: number) => (
                <Tag key={key}>{tag}</Tag>
            ))}
        </div>
    )
}

export default TagList;