import React, { useEffect } from "react";
import { ContentLayout } from "../components/Layout/ContentLayout";

const Films = () => {
  if (localStorage.getItem("Films") === null) {
    const firstload = [];
    const load = JSON.stringify(firstload);
    localStorage.setItem("Films", load);
  }

  const LSFilmsData = JSON.parse(localStorage.getItem(`Films`));

  const [Newcontent, setNewcontent] = React.useState(LSFilmsData);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    const newFilm = JSON.stringify(Newcontent);
    localStorage.setItem("Films", newFilm);
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

export default Films;
