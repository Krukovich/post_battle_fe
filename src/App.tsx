import React from 'react';
import PostBattle from './pages/PostBattle/PostBattle';
import useRequest from './hooks/useRequest';
import Spinner from './components/Spinner/Spinner';
import axios from 'axios';
import { SpinnerWrapper } from './styled';

const getFakePlayers = () => {
  return axios.get('http://localhost:4000/users/');
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
