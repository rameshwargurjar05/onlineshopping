import React, { useContext } from 'react'
import { AppInfo } from './index'

function Gallery1() {
    const data=useContext(AppInfo)
    return (
        <h1>Gallery1 {data.appname}</h1>
    )
}

export default Gallery1
