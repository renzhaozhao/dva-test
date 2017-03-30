import React, { PropTypes } from 'react'

import './style.less'

const CountApp = ({ count, onAdd, onMinus }) => {
  return (
    <div className="normal">
      <div className="record">Highest Record: {count.record}</div>
      <div className="current">{count.current}</div>
      <div className="button">
        <button onClick={onAdd}>+</button>
      </div>
      <div className="button">
        <button onClick={onMinus}>-</button>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>实验成功</div>
    </div>
  )
}

CountApp.propTypes = {
  count: PropTypes.object.isRequired
}

export default CountApp
