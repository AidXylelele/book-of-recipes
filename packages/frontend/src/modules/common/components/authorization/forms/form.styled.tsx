import styled from 'styled-components';
import { SPACES } from '../../../../theme';

export const Container = styled('div')`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled('h1')`
  font-size: calc((100vw - ${SPACES.m}) / (80 - 60) * (1.5 - 1) + ${SPACES.m});
  font-weight: bold;
  margin-bottom: ${SPACES.l};
`;

export const FromItemsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
