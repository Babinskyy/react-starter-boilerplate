import '../../../assets/styles/main.scss';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useFilter } from '../../../context/filterContext/FilterContext';
import { useEffect } from 'react';

interface FilterOptions {
  active: boolean;
  promo: boolean;
}

type FilterName = keyof FilterOptions;

const Filters = () => {
  const { filterOptions, updateFilterOptions } = useFilter();

  const handleCheckboxChange = (filterName: FilterName) => {
    updateFilterOptions({ [filterName]: !filterOptions[filterName] });
  };

  return (
    <>
      <Checkbox onChange={() => handleCheckboxChange('active')} id="active" checked={filterOptions.active}>
        Active
      </Checkbox>
      <Checkbox onChange={() => handleCheckboxChange('promo')} id="promo" checked={filterOptions.promo}>
        Promo
      </Checkbox>
    </>
  );
};

export default Filters;
