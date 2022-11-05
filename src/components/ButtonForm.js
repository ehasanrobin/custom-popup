import React, { useState } from "react";

const ButtonForm = (props) => {
  const { type, name, description, tooltip } = props.btn;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  let icon;
  if (type === "success") {
    icon = (
      <i className="fa-solid fa-check mx-1  rounded-full text-xs p-1 bg-success modal-icon"></i>
    );
  } else if (type === "warning") {
    icon = (
      <i className="fa-solid fa-exclamation mx-1  rounded-full text-xs p-1 bg-warning modal-icon"></i>
    );
  } else if (type === "danger") {
    icon = (
      <i className="fa-solid fa-x mx-1  rounded-full text-xs p-1 bg-red-700 modal-icon"></i>
    );
  }
  return (
    <label htmlFor="my-modal-4">
      <label
        htmlFor="my-modal-4"
        className="btn border form-button relative px-2 text-black w-full border-slate-600	"
      >
        <div className=" absolute left-0 top-1">
          <div
            className="flex items-center px-1 relative"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <span>{icon}</span>
            <div
              className={`toolbox absolute left-8 bg-zinc-50 text-left p-2 w-96 ${
                !hovered ? "hidden" : ""
              }`}
            >
              <h4 className="bg-zinc-100 py-2 text-pink-700">
                <span>
                  <i className="fa-solid fa-bullhorn"></i>
                </span>{" "}
                {tooltip}
              </h4>
              <p className="py-3">{description}</p>
            </div>
          </div>
        </div>
        {name}
      </label>
    </label>
  );
};

export default ButtonForm;
