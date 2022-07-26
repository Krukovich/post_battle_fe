import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { IPlayer } from './interface';
import { MAX_COUNT_KILLS_OR_DEATH, MIN_COUNT_KILLS_OR_DEATH, PLAYER_STATUS } from './constants';

export const createData = (
  nickName: string,
  score: number,
  state: string,
  deathCount: number,
  keelsCount: number,
): { score: number; nickName: string; state: string; deathCount: number; keelsCount: number } => {
  return { nickName, score, state, deathCount, keelsCount };
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const transformPlayers = (players: any[]): IPlayer[] => {
  return players.map((player) => {
    const deathCount: number = randomIntFromInterval(MIN_COUNT_KILLS_OR_DEATH, MAX_COUNT_KILLS_OR_DEATH);
    const keelsCount: number = randomIntFromInterval(MIN_COUNT_KILLS_OR_DEATH, MAX_COUNT_KILLS_OR_DEATH);
    const status: number = randomIntFromInterval(0, 1);

    return {
      id: player.id,
      username: player.username,
      height: player.height,
      deathCount,
      keelsCount,
      status: status === 1 ? PLAYER_STATUS.IS_ALIVE : PLAYER_STATUS.IS_DEAD,
    };
  });
};
