
import React, { useEffect } from "react";
import {Login, Spotify} from './components';
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;

    //console.log('hash: ' + hash)
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      //console.log(token);

      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <div>
      {
        //se a token for vazia vai para o login
        token ? <Spotify /> : <Login />
      }
    </div>
  );
}

export default App;
