import React, { memo } from 'react'

function Users({userList}) {
    console.log('user List call')
    return (
        <>
        <ul>
            {
                userList.map((username,index)=><li key={index}>{username}</li>)
            }
        </ul>
        </>
    )
}

export default memo(Users)
