import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd' 
import styles from '../styles/Home.module.css'
import Sider from 'antd/lib/layout/Sider';
import { Content, Footer, Sider, Header } from 'antd/lib/layout/layout';

export default function Home() {
  return (
   <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
   </Layout>
  )
}
