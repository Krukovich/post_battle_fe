import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TABLE_HEADERS } from '../../constants';
import { createData } from '../../utils';
import { IPlayer } from '../../interface';
import { Tooltip } from '@mui/material';
import { TooltipValueWrapper } from '../../styled';

interface IComponentProps {
  players: IPlayer[];
}

const ScoreTable: React.FC<IComponentProps> = ({ players }: IComponentProps): JSX.Element => {
  const rows = useMemo(() => {
    return players.map((player) =>
      createData(player.username, player.height, player.status, player.deathCount, player.keelsCount),
    );
  }, [players]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{TABLE_HEADERS.NICKNAME}</TableCell>
            <TableCell align="right">{TABLE_HEADERS.SCORE}</TableCell>
            <TableCell align="right">{TABLE_HEADERS.STATUS}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nickName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Tooltip
                  title={
                    <TooltipValueWrapper>
                      <span>kills: {row.keelsCount}</span>
                      <span>deaths: {row.deathCount}</span>
                    </TooltipValueWrapper>
                  }
                  arrow
                >
                  <span>{row.nickName}</span>
                </Tooltip>
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
