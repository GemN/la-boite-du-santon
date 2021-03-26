import React, { memo } from 'react';
import { Link } from 'gatsby';
import Logo from '../../ui/Logo';
import { ContainerNavbar, ContainerLinks } from './Navbar.styles';

const Navbar = () => (
  <ContainerNavbar>
    <Logo />
    <ContainerLinks>
      <a href="#subscribe">Subscribe</a>
    </ContainerLinks>
  </ContainerNavbar>
);

export default memo(Navbar);
