import React, { useEffect } from "react";
import { ContentLayout } from "../components/Layout/ContentLayout";

const Animes = () => {
  if (localStorage.getItem("Animes") === null) {
    const firstload = [];
    const load = JSON.stringify(firstload);
    localStorage.setItem("Animes", load);
  }

  const LSFilmsData = JSON.parse(localStorage.getItem(`Animes`));

  const [Newcontent, setNewcontent] = React.useState(LSFilmsData);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    const newFilm = JSON.stringify(Newcontent);
    localStorage.setItem("Animes", newFilm);
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

export default Animes;
