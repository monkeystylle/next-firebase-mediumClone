import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Toaster } from 'react-hot-toast';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Toaster />
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Layout;
