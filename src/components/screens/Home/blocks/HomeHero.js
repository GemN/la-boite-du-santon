import React, { memo } from 'react';
import Navbar from '../../../elements/Navbar/Navbar';
import {
  HeroBg, HeroBottom, HeroImg, HeroTopTitle, HeroBottomTitle, HeroLeftTitle, HeroRightTitle, HeroWrapperImg,
} from './HomeHero.styles';
import heroImg from '../../../../assets/images/hero-wine.jpg';
import I from '../../../ui/I';

const HomeHero = () => (
  <div>
    <HeroBg>
      <Navbar />
    </HeroBg>
    <HeroBottom>
      <HeroLeftTitle>
        with
      </HeroLeftTitle>
      <HeroWrapperImg>
        <HeroTopTitle>
          <I>Share</I>
          {' '}
          a bit of
          <br />
          la—Provence
        </HeroTopTitle>
        <HeroImg src={heroImg} />
        <HeroBottomTitle>
          —friends
        </HeroBottomTitle>
      </HeroWrapperImg>
      <HeroRightTitle>
        your
      </HeroRightTitle>
    </HeroBottom>
  </div>
);
export default memo(HomeHero);
