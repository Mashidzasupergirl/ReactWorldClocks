import React from 'react'

const Clock = (props) => {
return  <div className='clock'>
<h2>{props.date}</h2>
<p>{props.zone}</p>
</div>
}

export default Clock