import React from 'react';
import PostBattle from './pages/PostBattle/PostBattle';
import useRequest from './hooks/useRequest';
import Spinner from './components/Spinner/Spinner';
import axios from 'axios';
import { SpinnerWrapper } from './styled';
import { FAKE_PLAYERS_URL } from './constants';

const getFakePlayers = () => {
  return axios.get(FAKE_PLAYERS_URL);
};

const App: React.FC = (): JSX.Element => {
  const [players, loading] = useRequest(getFakePlayers);

  if (loading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (Array.isArray(players)) {
    return (
      <div className="App">
        <PostBattle players={players} />
      </div>
    );
  }

  return <span>Post battle screen</span>;
};

export default App;
