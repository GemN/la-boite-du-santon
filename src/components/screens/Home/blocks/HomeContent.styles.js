import styled from 'styled-components';
import srcBoiteSanton from '../../../../assets/images/box-content.png';

export const ContainerContent = styled.div`
  background: #778266;
  text-align: center;
  color: white;
  padding: 88px 16px;
`;

export const Description = styled.p`
  max-width: 440px;
  width: 100%;
  font-size: 21px;
  margin: 40px auto 0 auto;
`;

export const ImgBoiteSanton = styled.img.attrs((p) => ({
  alt: 'content of the monthly wine box',
  src: srcBoiteSanton,
}))`
  max-width: 1177px;
  height: auto;
  width: 100%;
`;
