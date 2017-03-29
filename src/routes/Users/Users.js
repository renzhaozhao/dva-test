import React from 'react'
import { connect } from 'dva'
import './style.less'

function Users() {
  return (
    <div className="normal">
      Route Component: Users
    </div>
  )
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Users)
