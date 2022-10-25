import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {};

const Loader = ({ show }) => {
  return show ? <LoaderComp></LoaderComp> : null;
};

const spin = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderComp = styled.div`
  border: 6px solid var(--color-bg);
  border-top: 6px solid var(--color-blue);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 800ms linear infinite;
`;

export default Loader;
