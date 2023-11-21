import { Outlet } from 'react-router-dom';
import '../../assets/styles/main.scss';

export const NoHeaderLayout = () => {
  return (
    <div className="app">
      <main className="app-main-no-header">
        <Outlet />
      </main>
    </div>
  );
};
