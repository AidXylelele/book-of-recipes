import styled from 'styled-components';
import { SPACES } from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACES.m};
`;

export class ProductsListStyled {
  static box = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
}
