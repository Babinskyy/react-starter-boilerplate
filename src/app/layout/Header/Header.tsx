import { Paper } from '@mui/material';
import '../../../assets/styles/main.scss';
import Logo from '../Logo';
import Button from '@mui/material/Button';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className="header">
      <div className="content-container">
        <Logo />
        <Searchbar />
        <div />
        <div />
        <Button
          variant="outlined"
          size="large"
          className="login-button"
          sx={{ color: '#4460F7', borderColor: '#4460F7' }}
        >
          <span>l</span>og in
        </Button>
      </div>
    </header>
  );
};

export default Header;
