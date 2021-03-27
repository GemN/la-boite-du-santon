import styled from 'styled-components';
import heroBg from '../../../../assets/images/hero-bg.jpg';
import media from '../../../../helpers/media';

export const HeroBg = styled.div`
  height: 699px;
  width: 100%;
  background: url(${heroBg}) no-repeat center center fixed;
  background-size: cover;
  ${media.phone`
    height: 350px;
  `}
`;

export const HeroBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translate(0, -50%);
  ${media.phone`
    padding: 0 44px;
  `}
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
  ${media.phone`
    max-width: 300px;
  `}
`;
export const HeroTitle = styled.h1`
  font-weight: normal;
  font-size: 96px;
  margin: 0;
  color: white;
  white-space: nowrap;
  ${media.tablet`
    font-size: 72px;
  `}
  ${media.phone`
    font-size: 48px;
  `}
`;

export const HeroTopTitle = styled(HeroTitle)`
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.phone`
    top: -16px;
  `}
`;

export const HeroBottomTitle = styled(HeroTitle)`
  position: absolute;
  bottom: -124px;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.phone`
    bottom: -62px;
  `}
`;

export const HeroLeftTitle = styled(HeroTitle)`
  margin-right: 40px;
  font-style: italic;
  ${media.tablet`
    margin-right: 20px;
  `}
  ${media.phone`
    font-size: 40px;
    margin-right: 0;
    position: absolute;
    top: 50%;
    left: 16px;
    z-index: 4;
    transform: translate(0, -50%);

  `}
`;
export const HeroRightTitle = styled(HeroTitle)`
  margin-left: 40px;
  ${media.tablet`
    margin-left: 20px;
  `}
  ${media.phone`
    margin-left: 0;
    font-size: 40px;
    position: absolute;
    top: 50%;
    right: 16px;
    z-index: 4;
    transform: translate(0, -50%);

  `}
`;
