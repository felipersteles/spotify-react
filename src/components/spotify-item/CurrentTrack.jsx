import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider, reducerCases } from "../../utils";

export default function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      //buscando resposta da api
      const response = await axios.get(
        //documentaçãp: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-the-users-currently-playing-track
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      //caso esteja tocando algo
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };

    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;

    &__image {
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      &__track__name {
        color: white;
        margin-bottom: 0;
      }

      &__track__artists {
        color: #b3b3b3;
        margin-top: 0.35rem;
      }
    }
  }
`;
