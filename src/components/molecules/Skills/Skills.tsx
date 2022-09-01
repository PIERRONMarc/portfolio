function Skills() {
    return (
        <section className="mb-24 mt-12">
            <div className="overflow-x-auto">
                <table className="table-auto whitespace-nowrap text-primary w-full">
                    <thead>
                    <tr className="text-left bg-secondary font-montserrat text-lg text-accent">
                        <th className="p-5">Frontend</th>
                        <th className="p-5">DevOps</th>
                        <th className="p-5 xl:pl-12">Backend</th>
                        <th className="p-5">Designer</th>
                        <th className="p-5">Architecture</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-3">React</td>
                        <td className="p-3">Continuous integration</td>
                        <td className="p-3 bg-secondary pl-5 pr-5">Symfony (3yo+)</td>
                        <td className="p-3">Mockup & Prototype</td>
                        <td className="p-3">Database architecture design</td>
                    </tr>
                    <tr>
                        <td className="p-3">Mockup integration</td>
                        <td className="p-3">Infrastructure as code (Terraform)</td>
                        <td className="p-3 bg-secondary pl-5 pr-5">API REST</td>
                        <td className="p-3">Atomic design</td>
                        <td className="p-3">System design</td>
                    </tr>
                    <tr>
                        <td className="p-3">#Responsive</td>
                        <td className="p-3">Docker</td>
                        <td className="p-3 bg-secondary pl-5 pr-5">Database</td>
                    </tr>
                    <tr>
                        <td className="p-3">#MobileFirst</td>
                        <td className="p-3">Cloud (AWS)</td>
                        <td className="p-3 bg-secondary pl-5 pr-5">Message queues</td>
                    </tr>
                    <tr>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3 bg-secondary pl-5 pr-5">#TDD</td>
                    </tr>
                    <tr>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3 bg-secondary pl-5 pr-5">#CleanCode</td>
                    </tr>
                    <tr>
                        <td className="p-3"></td>
                        <td className="p-3"></td>
                        <td className="p-3 bg-secondary pl-5 pr-5">#Craft</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Skills;