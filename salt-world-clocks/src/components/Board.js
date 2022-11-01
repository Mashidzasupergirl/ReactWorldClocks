import React from 'react';
import Clock from './Clock';

const Board = (props) => {
  return (
    <>
    <div className='board'>{props.zones.map((area, i) => {
      return <Clock
        key={i}
        zone={area.title}
        date={props.date.toLocaleTimeString('it-IT', {timeZone: area.zone})}/>
    })}
    </div>
    </>
  )
}

export default Board