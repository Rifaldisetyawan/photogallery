import React from 'react'
import './navbar.scss'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        Photos Gallery</div>
      <div className="usernamePage">
        <div className="userName">RifaldiSetyawan</div><Button type="danger" icon={<PoweroffOutlined />} style={{borderRadius:'5px'}}/>
      </div>

    </div>
  )
}

export default Navbar