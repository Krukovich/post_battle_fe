import React from 'react';
import { Box, Grid, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import ScoreTable from '../../components/ScoreTable/ScoreTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PostBattle: React.FC = (): JSX.Element => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <ScoreTable />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <ScoreTable />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PostBattle;
