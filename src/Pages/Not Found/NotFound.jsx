import React from 'react'
import "./NotFound.css"
import image from "./404-github.png"


const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 id="not-found-title" className="text-4xl mt-9 font-bold">Error 404: Page Not Found</h1>
            <h2 id="text-h2" className="text-2xl">Try with another user...</h2>
            <img src={image} alt="p" className="w-60" />
            
        </div>
    )
}

export default NotFound
