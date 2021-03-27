import styled from 'styled-components';
import bgRedCircle from '../../../assets/images/redcircle.svg';
import media from '../../../helpers/media';

export const Background = styled.div`
  background: #dcb284;
  padding: 88px 16px;
  ${media.phone`
    padding: 44px 16px;
  `}
`;
export const ContainerSignup = styled.div`
  margin: auto;
  color: white;
  max-width: 536px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Discount = styled.p`
  font-size: 40px;
  margin-top: 120px;
  ${media.phone`
    font-size: 21px;
    margin-top: 59px;
  `}
`;

export const ContainerInfoSignup = styled.div`
  background: url(${bgRedCircle}) no-repeat center center;
  background-size: 268px 268px;
  ${media.phone`
    background-size: 134px 134px;
  `}
`;

export const InputEmail = styled.input`
  border: solid 2px #ffffff;
  background: transparent;
  padding: 16px 24px;
  height: 56px;
  color: white;
  flex: 1;
  margin-right: 8px;
  font-size: 16px;
  transition: all ease-in 0.2s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
  ${media.phone`
    height: 42px;
    padding: 12px 16px;
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  `}
`;
export const ButtonSignupNewsletter = styled.button`
  height: 56px;
  padding: 0 42px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  background: transparent;
  border: solid 2px #ffffff;
  outline: none;
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
  }
  ${media.phone`
    height: 42px;
      width: 100%;
  `}
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 56px;
  ${media.phone`
    margin-top: 26px;
  `}
`;
export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  ${media.phone`
    flex-direction: column;
  `}
`;

export const InfoMsg = styled.div`
  margin-top: 16px;
`;

export const EmailSent = styled.div`
  font-size: 21px;
  text-align: center;
  width: 100%;
  border: 1px solid white;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
