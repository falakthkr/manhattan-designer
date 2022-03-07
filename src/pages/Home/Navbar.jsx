import React from "react";
import { Menu } from 'antd';
import { PhoneOutlined, AppstoreOutlined, InfoCircleOutlined } from '@ant-design/icons';

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  render() {
    const { current } = this.state;
    return (
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="about" href="#about" style={{color: 'maroon'}} icon={<InfoCircleOutlined style={{ fontSize: '16px', color:'maroon' }} />}>
          Who We Are
        </Menu.Item>
        <Menu.Item key="services" href="#services" style={{color: 'maroon'}} icon={<AppstoreOutlined style={{ fontSize: '16px', color:'maroon' }} />}>
          What We Do
        </Menu.Item>
        <Menu.Item key="contact" href="#contact" style={{color: 'maroon'}} icon={<PhoneOutlined style={{ fontSize: '16px', color:'maroon' }} />}>
          Contact Us
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;