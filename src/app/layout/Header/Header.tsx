import '../../../assets/styles/main.scss';
import Logo from '../../common/Logo';
import Button from '@mui/material/Button';
import Searchbar from './components/Searchbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from './components/Menu';

const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(localStorage.getItem('user') ? true : false);
  }, []);

  return (
    <header className="header">
      <div className="content-container">
        <div className="logo-menu-container">
          <Logo />
          <div className="menu-mobile">
            {isLogged ? (
              <Menu setIsLogged={setIsLogged} />
            ) : (
              <Button
                variant="outlined"
                size="large"
                className="login-button"
                sx={{ color: '#4460F7', borderColor: '#4460F7' }}
                onClick={() => navigate('/login')}
              >
                <span>l</span>og in
              </Button>
            )}
          </div>
        </div>

        <Searchbar />
        <div className="spacer" />
        <div className="menu-desktop">
          {isLogged ? (
            <Menu setIsLogged={setIsLogged} />
          ) : (
            <Button
              variant="outlined"
              size="large"
              className="login-button"
              sx={{ color: '#4460F7', borderColor: '#4460F7' }}
              onClick={() => navigate('/login')}
            >
              <span>l</span>og in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
