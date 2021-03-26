import styled from 'styled-components';
import heroBg from '../../../../assets/images/hero-bg.jpg';

export const HeroBg = styled.div`
  height: 699px;
  width: 100%;
  background: url(${heroBg}) no-repeat center center fixed;
  background-size: cover;
`;

export const HeroBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translate(0, -50%);
`;

export const HeroWrapperImg = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;
export const HeroImg = styled.img`
  max-width: 448px;
  width: 100%;
  height: auto;
`;
export const HeroTitle = styled.h1`
  font-weight: normal;
  font-size: 96px;
  margin: 0;
  color: white;
  white-space: nowrap;
`;

export const HeroTopTitle = styled(HeroTitle)`
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroBottomTitle = styled(HeroTitle)`
  position: absolute;
  bottom: -124px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroLeftTitle = styled(HeroTitle)`
  margin-right: 40px;
  font-style: italic;
`;
export const HeroRightTitle = styled(HeroTitle)`
  margin-left: 40px;
`;
