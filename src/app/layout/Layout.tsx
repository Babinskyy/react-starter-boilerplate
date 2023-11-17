import { Outlet } from 'react-router-dom';
import '../../assets/styles/main.scss';
import Header from './Header/Header';

export const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
};
