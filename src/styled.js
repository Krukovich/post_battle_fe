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

export const PostBattleScoreWrapper = styled.div`
  background-image: url('/assets/img/bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const ScoreTableWrapper = styled.div`
  max-height: 500px;
`;

export const MatchTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 50px 0;
  text-transform: uppercase;
  font-size: 40px;
`;

export const InviteButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;
