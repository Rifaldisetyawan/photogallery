import React from 'react'
import Gallery from '../gallery/Gallery'
import Navbar from '../navbar/Navbar'
import './content.scss'

const Content = () => {
    return (
        <div className="content">
                <Navbar />
                <Gallery />
                
        </div>
    )
}

export default Content