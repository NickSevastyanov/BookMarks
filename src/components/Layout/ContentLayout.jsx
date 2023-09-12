import React from 'react'
import { Logo } from "../logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import  Header  from "../Header/Header";
import  MainContent  from "../assets/Content/MainContent";

export const ContentLayout = ({Newcontent, setNewcontent, searchValue, setSearchValue}) => {
  return (
    <div className="flex">
      <div className="navbarContainer">
        <div className="border-r-2 border-black">
          <Logo />
          <Navbar Newcontent={Newcontent} setNewcontent={setNewcontent} />
        </div>
      </div>
      <div>
        <Header          
          Newcontent={Newcontent}
          setNewcontent={setNewcontent}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <MainContent
          Newcontent={Newcontent}
          setNewcontent={setNewcontent}
          searchValue={searchValue}
        />
      </div>
    </div>
  )
}

