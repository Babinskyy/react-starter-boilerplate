import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        boxShadow: 'none',
        border: '1px solid #E0E2EA',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: '14px',
          color: 'rgba(0, 0, 0, 1)',
        }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
