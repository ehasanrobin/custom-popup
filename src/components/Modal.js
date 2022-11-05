import React, { useState } from "react";
import ButtonForm from "./ButtonForm";
import "./modal.css";
const Modal = () => {
  const [mehr, setMehr] = useState(3);
  const [mehr1, setMehr1] = useState(3);
  const [mehr2, setMehr2] = useState(3);
  const [mehr3, setMehr3] = useState(3);

  const apiarray = [
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "success",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "success",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "warning",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "success",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "success",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
    {
      name: "Business Mobil EINS",
      tooltip: "Hello",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur",
      type: "danger",
    },
  ];
  return (
    <>
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle  absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-medium">Tarif wahlen</h3>
          <div className="flex flex-col w-full">
            <div className="divider"></div>
          </div>
          <div className=" ">
            <div className="text-lg font-medium sm:flex items-center ">
              <h3>Vermarktung Legenden: </h3>
              <div className="flex items-center px-1">
                <span>
                  <i className="fa-solid fa-check mx-1  rounded-full text-xs p-1 bg-success modal-icon"></i>
                </span>
                <span className="font-light">aktiv</span>
              </div>
              <div className="flex items-center px-1">
                <span>
                  <i className="fa-solid fa-exclamation text-xs bg-amber-500 mx-1 rounded-full modal-icon"></i>
                </span>
                <span className="font-light">Reaktiv</span>
              </div>
              <div className="flex items-center  ">
                <span>
                  <i className="fa-solid fa-x bg-red-700 text-xs p-1 modal-icon rounded-full "></i>
                </span>
                <span className="font-light">Eingestelit</span>
              </div>
            </div>
          </div>
          <div className="sm:flex flex-col w-full">
            <div className="divider"></div>
          </div>

          <div className="sm:grid grid-cols-2 items-start ">
            <div className="grid grid-cols-1 mx-2 gap-4 ">
              <h2 className="text-lg font-medium">mobilfunk</h2>
              {apiarray.slice(0, mehr).map((btn, index) => (
                <ButtonForm key={index} btn={btn}></ButtonForm>
              ))}

              <div className="form-btn">
                <button
                  onClick={() => setMehr(mehr + 3)}
                  className=" mehr-btn btn btn-sm w-16 bg-transparent lowercase color-black ml-0"
                >
                  mehr
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              <div className="grid grid-cols-1 mx-2 gap-4 ">
                <h2 className="text-lg font-medium">mobilfunk combiCard</h2>
                {apiarray.slice(0, mehr1).map((btn, index) => (
                  <ButtonForm key={index} btn={btn}></ButtonForm>
                ))}

                <div className="form-btn">
                  <button
                    onClick={() => setMehr1(mehr1 + 3)}
                    className=" mehr-btn btn btn-sm w-16 lowercase bg-transparent color-black ml-0"
                  >
                    mehr
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:grid grid-cols-2 items-start ">
            <div className="grid grid-cols-1 mx-2 gap-4 ">
              <h2 className="text-lg font-medium">mobilfunk</h2>
              {apiarray.slice(0, mehr2).map((btn, index) => (
                <ButtonForm key={index} btn={btn}></ButtonForm>
              ))}

              <div className="form-btn">
                <button
                  onClick={() => setMehr2(mehr2 + 3)}
                  className=" mehr-btn btn btn-sm w-16 bg-transparent lowercase color-black ml-0"
                >
                  mehr
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              <div className="grid grid-cols-1 mx-2 gap-4 ">
                <h2 className="text-lg font-medium">mobilfunk combiCard</h2>
                {apiarray.slice(0, mehr3).map((btn, index) => (
                  <ButtonForm key={index} btn={btn}></ButtonForm>
                ))}

                <div className="form-btn">
                  <button
                    onClick={() => setMehr3(mehr3 + 3)}
                    className=" mehr-btn btn btn-sm w-16 lowercase bg-transparent color-black ml-0"
                  >
                    mehr
                  </button>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default Modal;
