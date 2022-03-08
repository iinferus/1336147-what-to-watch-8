import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in/sign-in';
import MyListScreen from '../my-list/my-list';
import FilmScreen from '../movie-page/movie-page';
import AddReviewScreen from '../add-review/add-review';
import PlayerScreen from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type FilmCardProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({ title, genre, releaseDate }: FilmCardProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            title={title}
            genre={genre}
            releaseDate={releaseDate}
          />
        </Route>
        <Route exact path={AppRoute.SingIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} render={() => <MyListScreen/>} authorizationStatus={AuthorizationStatus.NoAuth} />
        <Route exact path={AppRoute.Film}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
