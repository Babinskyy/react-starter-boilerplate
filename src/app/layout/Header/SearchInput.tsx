import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useFilter } from 'context/filterContext/FilterContext';
import { useEffect, useState } from 'react';

export default function SearchInput() {
  const { filterOptions, updateFilterOptions } = useFilter();
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
    <Paper
      component="form"
      onSubmit={handleSearch} // Handle form submission
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 392,
        boxShadow: 'none',
        border: '1px solid #E0E2EA',
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: '14px',
          fontStyle: 'normal',
          input: {
            color: '#1A1B1D',
            '&::placeholder': {
              opacity: 1,
            },
          },
        }}
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
