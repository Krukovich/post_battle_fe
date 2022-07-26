export const MIN_COUNT_KILLS_OR_DEATH = 1;
export const MAX_COUNT_KILLS_OR_DEATH = 200;

export const PLAYER_STATUS: Readonly<{ IS_ALIVE: 'isAlive'; IS_DEAD: 'isDead' }> = Object.freeze({
  IS_ALIVE: 'isAlive',
  IS_DEAD: 'isDead',
});

export const TEAM: Readonly<{ SHEEP: 'Sheep'; BEAR: 'Bear' }> = Object.freeze({
  SHEEP: 'Sheep',
  BEAR: 'Bear',
});

export const MATCH_STATUS: Readonly<{ LOSE: 'lose'; WIN: 'win' }> = Object.freeze({
  LOSE: 'lose',
  WIN: 'win',
});

export const TABLE_HEADERS: Readonly<{ NICKNAME: 'Nickname'; SCORE: 'Score'; STATUS: 'Status' }> = Object.freeze({
  NICKNAME: 'Nickname',
  SCORE: 'Score',
  STATUS: 'Status',
});
