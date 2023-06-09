import { React, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { IconMenu2 } from '@tabler/icons-react'

function Navbar() {
    const [toggle, setToggle] = useState(false)

    const location = useLocation()
    useEffect(() => {
        setToggle(false)
    }, [location])

    return (
        <div className='navbar' id={toggle ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button
                    onClick={() => {
                        setToggle(!toggle)
                    }}>
                    <IconMenu2 size={30} />
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
    )
}

export default Navbar
