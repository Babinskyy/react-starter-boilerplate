import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Filters = () => {
  return (
    <>
      <FormControlLabel control={<Checkbox sx={{ fill: '#fff' }} />} label="Active" />
      <FormControlLabel control={<Checkbox />} label="Promo" />
    </>
  );
};

export default Filters;
