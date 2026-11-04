import React, { useEffect } from 'react'

function Timer({secondsRemaining, dispatch}) {
    const minutes = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60;
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({type: "tick"})
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className='timer'>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  )
}

export default Timer
