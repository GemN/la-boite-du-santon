import styled from 'styled-components';

export const Flex = styled.div`
  ${(p) => `
    display: ${p.display};
    flex: ${p.flex};
    flex-direction: ${p.direction}
  `}
`;

Flex.defaultProps = {
  display: 'flex',
  flex: 1,
  direction: 'column',
};
