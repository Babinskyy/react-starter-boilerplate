import { Outlet } from 'react-router-dom';
import '../../assets/styles/main.scss';

export const NoHeaderLayout = () => {
  return (
    <div className="app">
      <main className="app__main--no-header">
        <Outlet />
      </main>
    </div>
  );
};
