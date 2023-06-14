import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import '../styles/ProjectDisplay.css'
import { IconBrandLinkedin, IconMail, IconBrandGithub } from '@tabler/icons-react'

function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id - 1]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt='' />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <IconBrandGithub />
        </div>
    )
}

export default ProjectDisplay
