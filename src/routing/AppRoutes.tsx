import { Route, Routes } from 'react-router-dom';

import { About } from 'app/about/About';
import { Help } from 'app/help/Help';
import { Home } from 'app/home/Home';
import { Layout } from 'app/layout/Layout';
import { NoHeaderLayout } from 'app/layout/NoHeaderLayout';
import { User } from 'app/user/User';
import { UsersList } from 'app/usersList/UsersList';

import { AppRoute } from './AppRoute.enum';
import Products from 'app/products/Products';
import Login from 'app/login/Login';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.products} element={<Layout />}>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.about} element={<About />} />
      <Route path={AppRoute.help} element={<Help />} />
      <Route path={AppRoute.user} element={<User />} />
      <Route path={AppRoute.users} element={<UsersList />} />
      <Route path={AppRoute.products} element={<Products />} />
      <Route path="*" element={<Home />} />
    </Route>

    <Route path={AppRoute.login} element={<NoHeaderLayout />}>
      <Route path={AppRoute.login} element={<Login />} />
    </Route>
  </Routes>
);
