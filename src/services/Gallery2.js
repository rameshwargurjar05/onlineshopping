import React, { useContext } from 'react'
import { AppInfo, AppUsers } from '.'

function Gallery2() {
    const data=useContext(AppInfo)
    const userdata=useContext(AppUsers)
    return (
     <>
        <h1>Gallery2 {data.appname}</h1>
        <ul>
            {
                userdata.map((user,index)=><li key={index}>{user}</li>)
            }
        </ul>
        </>
    )
}

export default Gallery2
