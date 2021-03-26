import styled from 'styled-components';

export const B = styled.span`
  font-weight: ${(p) => p.weight};
`;
B.defaultProps = {
  weight: 'bold',
};
