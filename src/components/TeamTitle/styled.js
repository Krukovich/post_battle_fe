import styled from 'styled-components';

export const TitleWrapper = styled.span`
  color: ${(props) => (props.win ? 'green' : 'red')};
  font-weight: bold;
  font-size: 20px;
`;
