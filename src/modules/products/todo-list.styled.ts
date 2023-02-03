import styled from 'styled-components';
import { SPACES } from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACES.m};
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: ${SPACES.l} ${SPACES.l} 0 ${SPACES.l};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: ${SPACES.m};
  }
`;