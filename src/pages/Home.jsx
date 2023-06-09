import React from 'react'
import { IconBrandLinkedin, IconMail, IconBrandGithub } from '@tabler/icons-react'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h1>
                    Hi, I'm <span className='name'>Veysel AKSIN</span>
                </h1>
                <div className='prompt'>
                    <p>I'm a software developer.</p>
                    <p>I'm a student at the University of Computer Science.</p>
                    <IconBrandLinkedin size={30} />
                    <IconMail size={30} />
                    <IconBrandGithub size={30} />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Frontend</h2>
                        <span>React, React Native, Redux, HTML, CSS, JavaScript, TypeScript, Bootstrap, Material UI, Tailwind CSS</span>
                    </li>
                    <li className='item'>
                        <h2>Backend</h2>
                        <span>Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Firebase, REST API, GraphQL</span>
                    </li>
                    <li className='item'>
                        <h2>Others</h2>
                        <span>Git, GitHub, GitLab, Docker, Heroku, Netlify, Vercel, AWS, DigitalOcean, Linux, Windows, Mac</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
