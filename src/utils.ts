import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export const createData = (
  nickName: string,
  score: number,
  state: string,
): { score: number; nickName: string; state: string } => {
  return { nickName, score, state };
};

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
