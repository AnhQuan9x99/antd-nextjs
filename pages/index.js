import React from 'react';
import 'antd/dist/antd.css';
import '../styles/Home.module.css'
import { Layout } from 'antd' 
const { Sider, Header,Content, Footer} = Layout

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
