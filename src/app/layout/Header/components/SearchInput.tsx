import '../../../../assets/styles/main.scss';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useFilter } from 'context/filterContext/FilterContext';
import { useEffect, useState } from 'react';

export default function SearchInput() {
  const { updateFilterOptions } = useFilter();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    updateFilterOptions({ searchInput: inputValue });
  };

  const handleClear = () => {
    setInputValue('');
    updateFilterOptions({ searchInput: '' });
  };

  useEffect(() => {
    if (inputValue === '') {
      handleClear();
    }
  }, [inputValue]);

  return (
    <Paper component="form" onSubmit={handleSearch} className="search-input-container" sx={{ boxShadow: 'none' }}>
      <InputBase
        sx={{
          input: {
            color: '#1A1B1D',
            '&::placeholder': {
              opacity: 1,
            },
          },
        }}
        className="input-base"
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        endAdornment={
          inputValue && (
            <IconButton type="button" sx={{ p: '10px' }} aria-label="clear" onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          )
        }
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
