import styled from 'styled-components';
import { COLORS, SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';

export const ItemContainer = styled.div`
  margin: ${SPACES.l};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${SPACES.l};
  border: 1px solid ${COLORS.lightGrey};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: ${SPACES.l};
  width: -webkit-fill-available;
  @media only screen and (max-width: 999px) and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    border: none;
    box-shadow: none;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const ItemTitle = styled.p`
  font-size: ${SIZES.l};
  @media only screen and (min-width: 1000px) {
    min-width: 15%;
  }
`;

export const ItemDescription = styled.p`
  font-size: ${SIZES.s};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media only screen and (min-width: 1000px) {
    min-width: 55%;
    font-size: ${SIZES.m};
  }
`;
