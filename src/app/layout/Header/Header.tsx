import { Paper } from '@mui/material';
import '../../../assets/styles/main.scss';
import Logo from '../Logo';
import Button from '@mui/material/Button';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Searchbar />
      <Button variant="outlined" size="large" className="login-button">
        <span>l</span>og in
      </Button>
    </header>
  );
};

export default Header;
