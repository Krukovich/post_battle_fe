import React, { useEffect, useState } from 'react';
import { transformPlayers } from '../utils';
import { IPlayer } from '../interface';

const useRequest = (request: any) => {
  const [data, setData] = useState<IPlayer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    request()
      .then((response: { data: IPlayer[] }) => {
        const transformedPlayers: IPlayer[] = transformPlayers(response.data);
        setData(transformedPlayers);
      })
      .catch((error: React.SetStateAction<string>) => setError(error))
      .finally(() => setLoading(false));
  }, [request]);

  return [data, loading, error];
};

export default useRequest;
