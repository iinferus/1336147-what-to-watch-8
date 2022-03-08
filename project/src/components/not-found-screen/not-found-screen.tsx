import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

      <section className="not-found">
        <h1 className="page-title not-found__title">Page not found</h1>
        <a href="/" className="not-found__link">Back to main</a>
      </section>

      <footer className="page-footer">
        <Logo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
