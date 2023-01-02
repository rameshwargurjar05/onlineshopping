import React, { useContext } from 'react'
import { AppInfo } from './index.js'
import Gallery1 from './Gallery1'
import Gallery2 from './Gallery2'
function Gallery() {
    const data=useContext(AppInfo)
    console.log('useContext data : ',data)
    return (
       <>
        <h1>Gallery {data.appname}</h1>
        <Gallery1></Gallery1>
        <Gallery2></Gallery2>
       </>
    )
}

export default Gallery
