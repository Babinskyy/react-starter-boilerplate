import { Outlet } from 'react-router-dom';
import '../../assets/styles/main.scss';
import Header from './header/Header';

export const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};
