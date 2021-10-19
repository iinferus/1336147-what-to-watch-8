import MainScreen from '../main-screen/main-screen';

type FilmCardProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({title, genre, releaseDate}: FilmCardProps): JSX.Element {
  return (
    <MainScreen
      title={title}
      genre={genre}
      releaseDate={releaseDate}
    />
  );
}

export default App;
