import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { ShopOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const items = [
    {
        label: <Link style={{ textDecoration: 'none' }} to="/">Home</Link>,
        key: '1',
    },
    {
        label: <Link style={{ textDecoration: 'none' }} to='/product'>Product</Link>,
        key: '2',
    },
    {
        label: <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>,
        key: '3',
    },
    {
        label: <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>,
        key: '4',
    },
    {
        label: <Link to='/product-cart'><ShopOutlined style={{ fontSize: '5rem' }} className='shop' /></Link>,
        key: '5',

    },
]
const Navbar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',

                }}>
                <div className='navbar-menu' />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items} />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }} >
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}>
                {new Date().getFullYear()} Zafer Çelik
            </Footer>
        </Layout>
    );
};
export default Navbar;