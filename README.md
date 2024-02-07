# Spotify in Reactjs with redux

This captivating React app, fueled by the Spotify API and managed with Redux for streamlined state management, offers a seamless and powerful musical experience.

## Explore with Ease:

- Boundless Library: Uncover a vast ocean of music - artists, albums, genres, playlists - and embark on sonic adventures with personalized recommendations.
- Intuitive Search: Find specific tracks or let Spottify guide you to new favorites. Effortlessly explore and discover your next musical obsession.

## Craft Your Soundtrack:

- Playlist Maestro: Create playlists that perfectly capture your mood and curate them meticulously. Access them with ease whenever the urge for specific tunes strikes.
- Seamless Playback: Take control with intuitive controls. Play, pause, skip, seek, and shuffle with ease, ensuring uninterrupted musical bliss.

# Enhanced by Technology:

- React's Power: Enjoy a smooth and responsive user interface specifically designed for intuitive interactions and effortless discoverability.
- Redux's Efficiency: Leverage Redux's robust state management for scalable and predictable application behavior.
- Spotify API's Wealth: Tap into a boundless collection of music, encompassing diverse genres, artists, and eras.
- Personalized Touch: Let Spottify's intelligent algorithms suggest new musical havens based on your listening preferences.

## How to run

```bash
# clone the repo
$ git clone https://github.com/felipersteles/spotify-react.git


# install dependecies
$ npm i

# start the server
$ npm start

```

## Context

### Creating a Store and Provider: 
This holds the central state of your application. You define the initial state and functions to update it (reducers). The provider component from react-redux to make the store accessible to your React components.

> The initial state of store
> ![image2](./assets/initial-state.png)


Creating the provider using [React.useContext()](https://react.dev/reference/react/useContext):

- `const StateContext = createContext();`

![image3](./assets/state-provider.png)

## Reducer

> Spliting the use cases of the application
> ![image1](./assets/reducer-cases.png)


> And using switch to choose the method and change the store
> ![image3](./assets/reducer.png)

## Credits

- [video](https://youtu.be/ajVcLGEw8Xw).
- [listened playlist while coding](https://open.spotify.com/playlist/1mj1ooCvIKIW9fTjSKqmma?si=77f18e42382447ae).
