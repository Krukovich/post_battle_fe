import styled from 'styled-components';

export const TitleWrapper = styled.span`
  color: ${(props) => (props.win ? 'green' : 'red')};
  font-weight: bold;
  font-size: 20px;
`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TooltipValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
