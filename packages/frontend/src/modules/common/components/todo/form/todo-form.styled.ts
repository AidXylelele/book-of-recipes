import styled, { StyledComponent } from 'styled-components';
import { SPACES } from '../../../../theme';

export const FormContainer: StyledComponent<'div', any> = styled('div')`
  background: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: ${SPACES.m};
  padding: ${SPACES.s};
  box-shadow: 1px 1px 10px black;
  border-radius: 10px;
  min-width: ${SPACES.v};
`;
