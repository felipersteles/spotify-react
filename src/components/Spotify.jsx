import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { reducerCases, useStateProvider } from "../utils";
import { Body, Navbar, Sidebar, Footer } from "./spotify-item";

export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();

  //mudar a cor quando tiver scrolando
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);

    bodyRef.current.scrollTop >= 270
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  //conseguir os dados do usuario
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }); //console.log(data)

      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };

      // joga pro reducer fazer a autenticacao
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />

        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="body__contents">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>

      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;

  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(65, 14, 99);

    .body {
      height: 100%;
      width: 100%;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;

        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
