// react
import React from 'react';
import ReactLoading from 'react-loading';
// styled
import styled from 'styled-components';

const LoadingMask = () => {
  return (
    <Loading>
      <ReactLoading tyle='spin' color='#A593E0' />
    </Loading>
  );
};

const Loading = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export default LoadingMask;
