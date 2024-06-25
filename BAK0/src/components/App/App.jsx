import Menu from '../modules/Menu/Menu';
import PageRoutes from '../PageRoutes';

export const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <PageRoutes />
      </main>
    </>
  );
};
