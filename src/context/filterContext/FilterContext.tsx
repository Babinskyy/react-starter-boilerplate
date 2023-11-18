import React, { ReactNode, createContext, useContext, useState } from 'react';

interface FilterContextProps {
  children: ReactNode;
}

interface FilterOptions {
  active: boolean;
  promo: boolean;
  // Add more filter options as needed
}

interface FilterContextType {
  filterOptions: FilterOptions;
  updateFilterOptions: (filter: Partial<FilterOptions>) => void;
}

const defaultValue: FilterContextType = {
  filterOptions: {
    active: false,
    promo: false,
  },
  updateFilterOptions: () => {},
};

const FilterContext = createContext(defaultValue);

export const useFilter = (): FilterContextType => useContext(FilterContext);

export const FilterProvider: React.FC<FilterContextProps> = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(defaultValue.filterOptions);

  const updateFilterOptions = (filter: Partial<FilterOptions>) => {
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      ...filter,
    }));
  };

  const contextValue: FilterContextType = {
    filterOptions,
    updateFilterOptions,
  };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
