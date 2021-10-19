import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FilmCardData = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={FilmCardData.TITLE}
      genre={FilmCardData.GENRE}
      releaseDate={FilmCardData.RELEASE_DATE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
