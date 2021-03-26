import styled from 'styled-components';
import srcCuratedBy from '../../../../assets/images/curated-by.png';

export const ContainerCuratedBy = styled.div`
  text-align: center;
  padding: 88px 16px;
  background: #d9d2bc;
  color: white;
`;

export const ImgCuratedBy = styled.img.attrs((p) => ({
  src: srcCuratedBy,
  alt: 'grand ma curation',
}))`
  max-width: 848px;
  width: 100%;
  height: auto;
  margin-top: 96px;
`;
