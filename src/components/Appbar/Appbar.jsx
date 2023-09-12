import React from "react";
import { AppbarForm } from "../assets/AppbarForm/AppbarForm";
// import { useNavigate } from "react-router-dom";

export const Appbar = ({ setNewcontent, Newcontent, newItem }) => {
  // const WatchScheduled = [
  //   {
  //     id: 1,
  //     name: "Watched",
  //   },
  //   {
  //     id: 2,
  //     name: "Scheduled",
  //   },
  // ];

  // const navigate = useNavigate();
  return (
    <div className="  items-center">
      {/* {WatchScheduled.map((name) => {
        return (
          <div
            key={name.id}
            onClick={() => {
              navigate(`/${newItem.name}${name.name}`, { replace: true });
            }}
          >
            {name.name}
          </div>
        );
      })} */}

      <AppbarForm setNewcontent={setNewcontent} Newcontent={Newcontent} />
    </div>
  );
};
