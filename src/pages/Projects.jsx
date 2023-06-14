import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/Projects.css'
import { projectList as projects } from '../helpers/ProjectList'

function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projectList'>
                {projects.map(item => {
                    return <ProjectItem id={item.id} name={item.name} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default Projects
