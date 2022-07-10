import React, { useState } from 'react';

import styled from 'styled-components';
const ListBox = ({ listNumber, listTitle, listContents }) => {
  return (
    <ListWrap className='test'>
      <ListNumber>{listNumber}</ListNumber>

      <ListContentBox>
        <ListTitleBox>
          <ListTitle>{listTitle}</ListTitle>
        </ListTitleBox>

        <ListContentsBox>
          <ListContent>{listContents}</ListContent>
        </ListContentsBox>
      </ListContentBox>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  box-sizing: border-box;
  margin: 20px auto;
  overflow: hidden;
`;

const ListNumber = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #000;
`;

const ListContentBox = styled.div`
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListTitleBox = styled.div``;
const ListTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
`;

const ListContentsBox = styled.div``;
const ListContent = styled.p`
  font-size: 14px;
`;

export default ListBox;
