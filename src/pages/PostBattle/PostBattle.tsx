import React from 'react';
import { Box, Grid } from '@mui/material';
import ScoreTable from '../../components/ScoreTable/ScoreTable';
import TeamTitle from '../../components/TeamTitle/TeamTitle';
import { MATCH_STATUS, TEAM } from '../../constants';
import { Item } from '../../utils';
import { IPlayer } from '../../interface';
import { PostBattleScoreWrapper, ScoreTableWrapper } from '../../styled';

interface IComponentProps {
  players: IPlayer[];
}

const PostBattle: React.FC<IComponentProps> = ({ players }: IComponentProps): JSX.Element => {
  return (
    <PostBattleScoreWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} md-offset={2}>
          <Grid item xs={6}>
            <Item>
              <TeamTitle teamTitle={TEAM.BEAR} status={MATCH_STATUS.WIN} />
              <ScoreTableWrapper>
                <ScoreTable players={players} />
              </ScoreTableWrapper>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TeamTitle teamTitle={TEAM.SHEEP} status={MATCH_STATUS.LOSE} />
              <ScoreTable players={players} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </PostBattleScoreWrapper>
  );
};

export default PostBattle;
