import React from 'react'

import './style.less'

const CountApp = ({ count, dispatch }) => {
  return (
    <div className="normal">
      <div className="record">Highest Record: {count.record}</div>
      <div className="current">{count.current}</div>
      <div className="button">
        <button onClick={() => { dispatch({ type: 'count/add' }) }}>+</button>
      </div>
      <div className="button">
        <button onClick={() => { dispatch({ type: 'count/minus' }) }}>-</button>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>实验成功</div>
    </div>
  )
}

CountApp.propTypes = {
}

export default CountApp
