import React from 'react';
import { Box, Grid } from '@mui/material';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import TeamTitle from '../../components/TeamTitle/TeamTitle';
import { MATCH_STATUS, MATCH_TITLE, TEAM } from '../../constants';
import { Item } from '../../utils';
import { IPlayer } from '../../interface';
import { PostBattleScoreWrapper, ScoreTableWrapper } from '../../styled';
import MatchTitle from '../../components/MatchTitle/MatchTitle';

interface IComponentProps {
  players: IPlayer[];
}

const PostBattle: React.FC<IComponentProps> = ({ players }: IComponentProps): JSX.Element => {
  return (
    <PostBattleScoreWrapper>
      <MatchTitle title={MATCH_TITLE} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className="main-table">
          <Grid item md={5}>
            <Item>
              <TeamTitle teamTitle={TEAM.BEAR} status={MATCH_STATUS.WIN} />
              <ScoreTableWrapper>
                <ScoreTable players={players} status={MATCH_STATUS.WIN} />
              </ScoreTableWrapper>
            </Item>
          </Grid>
          <Grid item md={5}>
            <Item>
              <TeamTitle teamTitle={TEAM.SHEEP} status={MATCH_STATUS.LOSE} />
              <ScoreTable players={players} status={MATCH_STATUS.LOSE} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </PostBattleScoreWrapper>
  );
};

export default PostBattle;
