// eslint-disable-next-line simple-import-sort/imports
import React, { useEffect, useState } from 'react';
import './App.css';
import { getGamesList } from './services/games.api';

function App() {
  const [response, setResponse] = useState([]);
  // useEffect(() => {
  //   axios.get(GET_LIST_GAMES_URL, { headers: headers }).then((response) => {
  //     setResponse(response.data);
  //   });
  // }, []);
  useEffect(() => {
    getGamesList().then((response) => {
      setResponse(response);
    });
  }, []);
  return (
    <div className="App">
      {response.map((obj: any) => (
        <>
          <div>{obj?.title}</div>
        </>
      ))}
    </div>
  );
}
export default App;
