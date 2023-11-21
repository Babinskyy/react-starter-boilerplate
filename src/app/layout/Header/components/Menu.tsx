import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '../../../../assets/images/avatar.png';
import { useState } from 'react';

type AccountMenuProps = {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountMenu = (props: AccountMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    props.setIsLogged(false);
  };
  return (
    <>
      <Box style={{ width: '88px', display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <img src={Avatar} alt="avatar" className="avatar" />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={handleLogout}
          sx={{ width: '184px', height: '40px', fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: '14px' }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
