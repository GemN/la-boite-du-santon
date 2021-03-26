import React, { memo } from 'react';
import I from '../../../ui/I';
import { ContainerCuratedBy, ImgCuratedBy } from './HomeCuratedBy.styles';

const HomeCuratedBy = () => (
  <ContainerCuratedBy>
    <h2>
      CURATED
      <br />
      <I>BY</I>
      —MAMIE
    </h2>
    <ImgCuratedBy />
  </ContainerCuratedBy>
);

export default memo(HomeCuratedBy);
