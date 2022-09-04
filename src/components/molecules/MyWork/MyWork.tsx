import ProjectList from "../ProjectList/ProjectList";

interface MyWorkProps {
    className?: string
}

function MyWork(props: MyWorkProps) {

    const {className} = props;

    return (
        <section className={`${className}`}>
            <h2 className="text-3xl sm:text-4xl text-primary font-montserrat ">My <span className="text-accent">work</span></h2>
            <ProjectList />
        </section>
    )
}

export default MyWork;