import React from "react";
import { ReactComponent as SearchIcon } from "./search-svgrepo-com.svg";
import "./SearchBar.css";

export const SearchBar = ({searchValue, onChangeSearchValue }) => {
  


  

  return (
    <div className=" flex items-center">
        <SearchIcon className="  ml-2"/>
        <form className="ml-2  text-start">
            <input value={searchValue} onChange={onChangeSearchValue} type="text" className="border rounded cursor-pointer text-white" placeholder="Search..." />
        </form>
    </div>
      
    
  );
};
