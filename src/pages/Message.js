import React, { memo } from 'react'

function Message({msg}) {
    console.log('MSG Call')
    return (
        <h1>{msg}</h1>
    )
}

export default memo(Message)
