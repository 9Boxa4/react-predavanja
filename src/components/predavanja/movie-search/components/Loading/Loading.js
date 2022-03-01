import React from 'react';
import Spinner from '../../Images/spinner.svg'

const Loading = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={Spinner} />
    </div>
  )
}

export default Loading