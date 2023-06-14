import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.jpg'
import '../styles/Projects.css'

function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Project 1',
            image: Project1
        },
        {
            id: 2,
            name: 'Project 2',
            image: Project2
        },
        {
            id: 3,
            name: 'Project 3',
            image: Project3
        }
    ]
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projectList'>
                {projects.map(item => {
                    return <ProjectItem name={item.name} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default Projects
