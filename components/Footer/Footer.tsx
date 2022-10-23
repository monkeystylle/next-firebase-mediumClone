import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {};

const today = new Date();

const Footer = (props: Props) => {
  return (
    <>
      <FooterWrapper>
        <h2>THIS IS A FOOTER</h2>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0;

  color: #424226;
  background-color: silver;

  h2 {
    font-size: 1.2rem;
  }
`;

export default Footer;
