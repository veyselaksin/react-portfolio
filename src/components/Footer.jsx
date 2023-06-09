import React from 'react'
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <IconBrandFacebook size={30} />
                <IconBrandTwitter size={30} />
                <IconBrandInstagram size={30} />
                <IconBrandLinkedin size={30} />
            </div>
            <p>© 2021 - 2021</p>
        </div>
    )
}

export default Footer
