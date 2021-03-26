import React, { memo } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const ContainerFooter = styled.div`
  background: #d9d2bc;
  color: white;
  padding: 46px 16px 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.div`
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
`;

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Footer = () => (
  <ContainerFooter>
    <ContainerCenter>
      <Logo />
      <Copyright>© Copyright 2021 La Boite du Santon</Copyright>
    </ContainerCenter>
  </ContainerFooter>
);

export default memo(Footer);
