import '../../../../assets/styles/main.scss';
import Filters from './Filters';
import SearchInput from './SearchInput';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <SearchInput />
      <Filters />
    </div>
  );
};

export default Searchbar;
