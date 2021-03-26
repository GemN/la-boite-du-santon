import React, { memo } from 'react';
import { ContainerContent, Description, ImgBoiteSanton } from './HomeContent.styles';
import I from '../../../ui/I';

const HomeContent = () => (
  <ContainerContent>
    <h2>
      LA
      <I>BOITE</I>
      <br />
      DU — SANTON
    </h2>
    <Description>
      Every month get a taste of french provence to spice your quarantine zoom calls.
    </Description>
    <ImgBoiteSanton />
  </ContainerContent>
);

export default memo(HomeContent);
