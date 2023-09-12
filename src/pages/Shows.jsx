import React, { useEffect } from "react";
import { ContentLayout } from "../components/Layout/ContentLayout";

const Shows = () => {
  if (localStorage.getItem("Shows") === null) {
    const firstload = [];
    const load = JSON.stringify(firstload);
    localStorage.setItem("Shows", load);
  }

  const LSFilmsData = JSON.parse(localStorage.getItem(`Shows`));

  const [Newcontent, setNewcontent] = React.useState(LSFilmsData);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    const newFilm = JSON.stringify(Newcontent);
    localStorage.setItem("Shows", newFilm);
  }, [Newcontent]);

  return (
    <>
      <ContentLayout
        Newcontent={Newcontent}
        searchValue={searchValue}
        setNewcontent={setNewcontent}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default Shows;
