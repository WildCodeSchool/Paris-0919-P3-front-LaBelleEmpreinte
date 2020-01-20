import React, { useEffect } from 'react'
import Header from './Header'
import sizeMe from 'react-sizeme'

const GetHeaderHeight = ({ props, size: { height } }) => {

    useEffect(() => {
        props(height)
    }, [height])

    return (
        <div>
            <Header {...height} />
        </div>
    )
}

export default sizeMe({ monitorHeight: true })(GetHeaderHeight)