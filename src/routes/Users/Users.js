import React from 'react'
import { connect } from 'dva'
import './style.less'
import UsersComponent from '../../components/Users/Users'

function Users() {
  return (
    <div className="box container">
      <UsersComponent />
    </div>
  )
}

export default connect()(Users)
