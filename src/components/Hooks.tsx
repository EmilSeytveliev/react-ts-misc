import React, { useState, useEffect } from 'react'

const Hooks = () => {

    const [online, changeOnlineStatus] = useState<boolean>(false)
    
    useEffect(() => {
        console.log(`use effect true`)
        changeOnlineStatus(true)
    }, [])

    return <div className="separate-component">
        <div>Hooks</div>
        <div>Is online: {String(online)}</div>
        <button onClick={() => changeOnlineStatus(!online)}>Change Online Status</button>
    </div>
}

export default Hooks