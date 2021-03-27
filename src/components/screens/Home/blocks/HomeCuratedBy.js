import React, { memo } from 'react';
import I from '../../../ui/I';
import { ContainerCuratedBy, ImgCuratedBy, MobileImgCuratedBy } from './HomeCuratedBy.styles';

const HomeCuratedBy = () => (
  <ContainerCuratedBy>
    <h2>
      CURATED
      <br />
      <I>BY</I>
      —MAMIE
    </h2>
    <ImgCuratedBy />
    <MobileImgCuratedBy />
  </ContainerCuratedBy>
);

export default memo(HomeCuratedBy);
