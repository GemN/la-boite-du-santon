import styled from 'styled-components';
import media from '../../../helpers/media';

export const ContainerNavbar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 32px;
  align-items: center;
  ${media.phone`
    padding: 16px;
  `}
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  & a {
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
