import React from "react";
import { SearchBar } from '../SearchBar/SearchBar'
import { Appbar } from '../Appbar/Appbar';

const Header = ({ Newcontent, setNewcontent, searchValue, setSearchValue, newItem }) => {

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div className="header border-b-2 border-black ml-11 pb-10 mb-10">
        <SearchBar
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
        />
        <Appbar newItem={newItem} setNewcontent={setNewcontent} Newcontent={Newcontent} />
      </div>
    </div>
  );
};

export default Header;
