import './App.css';
import { Layout } from 'antd';
import React from 'react';
import Content from './components/content/Content';

const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content/>
        <Footer style={{ textAlign: 'center',backgroundColor:'#113b49',color:'#fff' }}> ©2022 Rifaldi Setyawan </Footer>
      </Layout>
    </div>
  );
}

export default App;
