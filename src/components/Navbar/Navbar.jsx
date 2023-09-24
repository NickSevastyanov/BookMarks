import React from "react";
import { ReactComponent as PlusIcon } from "./plus-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CrossIcon } from "./cross-svgrepo-com.svg";
import "./Navbar.module.css";

export const Navbar = ({ newItem, setNewItem, setNewcontent, Newcontent }) => {

  const NavbarItems = [
    {
      name: 'Films',
      id: 1
    },
    {
      name: 'Shows',
      id: 2,
    },
    {
      name: 'Animes',
      id: 3,
    }
  ]

  const navigate = useNavigate();

  const [formSeen, setFormseen] = React.useState(false);
  const [formInput, setformInput] = React.useState("");

  const togglePop = () => {
    setFormseen(!formSeen);
  };

  const AddNewItem = (e) => {
    e.preventDefault();
    setNewItem((prev) => [
      ...newItem,
      { name: formInput, id: prev.length + 1 },
    ]);
    togglePop();
    console.log(newItem);
  };

  const HandleChange = (event) => {
    setformInput(event.target.value);
  };

  // React.useEffect(() => {
  //   const json = JSON.stringify(newItem);
  //   localStorage.setItem(`Navbar`, json);
  // }, [newItem]);

  return (
    <div className=" mt-10  ">
      <h2 className="font-bold mb-10 text-3xl">Collections</h2>

      {NavbarItems.map((itemName) => (
        <div key={itemName.id}>
          <ul>
            <li onClick={() => navigate(`/${itemName.name}`)} className="cursor-pointer pb-10 font-thin gray">
              {itemName.name}
            </li>
          </ul>
        </div>
      ))}

      <div className="mt-5">
        <span className="cursor-pointer flex items-center " onClick={togglePop}>
          <PlusIcon />
          <span className="pl-2 ">Add collection (in Progress)</span>
        </span>
        {formSeen ? (
          <div className="login-box z-20">
            <form>
              <div className="user-box">
                <input
                  onChange={HandleChange}
                  value={formInput}
                  type="text"
                  name=""
                  required=""
                />
                <label>Enter name of new Collection</label>
                <CrossIcon
                  onClick={togglePop}
                  className="cursor-pointer cross"
                />
              </div>
              <center>
                <button >
                  Add
                  <span></span>
                </button>
              </center>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};
