import React, { useContext } from 'react'
import { AppUsers } from '.'

function Services({changeName}) {
    const userArray=useContext(AppUsers)
    return (
       <>
       <h1 onClick={()=>changeName('College App')}>Change App Name</h1>
        <h1>Services {userArray.join()}</h1></>
    )
}

export default Services
