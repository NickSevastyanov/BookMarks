import React from "react";
import { useForm } from "react-hook-form";
import "./AppbarForm.css";
import { ReactComponent as PlusIcon } from "./plus-svgrepo-com.svg";
import { ReactComponent as CrossIcon } from "./cross-svgrepo-com.svg";

export const AppbarForm = ({ setNewcontent, Newcontent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [AppbarFormSeen, setAppbarFormSeen] = React.useState(false);

  function findMaxId(Newcontent) {
    if (!Array.isArray(Newcontent) || Newcontent.length === 0) {
      return 1;
    }

    const maxId = Newcontent.reduce(
      (max, item) => Math.max(max, item.id),
      Newcontent[0].id
    );
    return maxId + 1;
  }

  const toggleAppbarForm = () => {
    setAppbarFormSeen(!AppbarFormSeen);
  };

  const CreateContent = (data) => {
    setNewcontent((prev) => [...prev, { id: findMaxId(Newcontent), ...data }]);
    reset();
    toggleAppbarForm();
  };

  return (
    <div>
      <PlusIcon onClick={toggleAppbarForm} className="cursor-pointer ml-3" />
      {AppbarFormSeen ? (
        <div className="login-box justify-between z-20">
          <form onSubmit={handleSubmit(CreateContent)}>
            <div className="user-box">
              <input
                type="text"
                placeholder="Name"
                {...register("Name", { required: "Fill the Name" })}
              />
              {errors.Name && <div className="err">{errors.Name.message}</div>}
              <input
                type="text"
                placeholder="URL"
                {...register("URL", { required: "Fill the URL" })}
              />
              {errors.URL && <div className="err">{errors.URL.message}</div>}
              <input
                type="text"
                placeholder="Image URL"
                {...register("Image", { required: "Fill the Image URL" })}
              />
              {errors.Image && (<div className="err">{errors.Image.message}</div>)}
              <label>New BookMark:</label>
              <CrossIcon
                onClick={toggleAppbarForm}
                className="cursor-pointer cross"
              />
            </div>
            <center>
              <button>
                Add
                <span></span>
              </button>
            </center>
          </form>
        </div>
      ) : null}
    </div>
  );
};
