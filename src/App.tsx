import React, { useCallback, useEffect, useState } from 'react';
import PostBattle from './pages/PostBattle/PostBattle';

const App: React.FC = (): JSX.Element => {
  const [players, setPlayers] = useState([]);

  const fetchFakeUsers = useCallback(async () => {
    const response = await fetch('http://localhost:4000/users', { mode: 'cors' });
    return await response.json();
  }, []);

  useEffect(() => {
    fetchFakeUsers().then((res) => {
      setPlayers(res);
    });
  }, []);

  return (
    <div className="App">
      <PostBattle players={players} />
    </div>
  );
};

export default App;
