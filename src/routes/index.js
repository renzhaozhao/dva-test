import React from 'react'
import { Card } from 'antd'
import { Link } from 'dva/router'
import './index.less'

const IndexPage = () => (
  <div className="container box">
    <div style={{ textAlign: 'center' }}>
      <img src={require('../assets/yay.jpg')} alt="avatar" style={{ width: 200 }} />
    </div>
    <Card title="资源导航">
      <p>
        <Link to="count">计数器</Link>
      </p>
      <p>
        <Link to="users">用户管理</Link>
      </p>
    </Card>
  </div>
)

export default IndexPage
