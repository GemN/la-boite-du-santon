import styled from 'styled-components';
import media from '../../../../helpers/media';
import srcCuratedBy from '../../../../assets/images/curated-by.png';
import srcCuratedByMobile from '../../../../assets/images/curated-by-mobile.png';

export const ContainerCuratedBy = styled.div`
  text-align: center;
  padding: 88px 16px;
  background: #d9d2bc;
  color: white;
  ${media.phone`
    padding: 44px 16px;
  `}
`;

export const ImgCuratedBy = styled.img.attrs((p) => ({
  src: srcCuratedBy,
  alt: 'grand ma curation',
}))`
  max-width: 848px;
  width: 100%;
  height: auto;
  margin-top: 96px;
  ${media.phone`
    display: none;
  `}
`;

export const MobileImgCuratedBy = styled.img.attrs((p) => ({
  src: srcCuratedByMobile,
  alt: 'grand ma curation',
}))`
  max-width: 848px;
  width: 100%;
  height: auto;
  margin-top: 44px;
  display: none;
  ${media.phone`
    display: block;
  `}
`;
