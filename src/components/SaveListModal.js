import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskDetails } from "../features/taskSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SaveListModal = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleCancel = () => {
    props.vis(false);
  };
  const handleSave = () => {
    if (title === "") {
      return toast.error("Title should not be left blank!");
    } else {
      dispatch(
        setTaskDetails({
          title: title,
          description: description,
          time: props.timer,
        })
      );
      props.vis(false);
    }
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center ">
                <div className="mt-3  sm:mt-0 flex flex-col m-auto items-end text-black">
                  <label>
                    Title:{" "}
                    <input
                      className="titleArea"
                      type={"text"}
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </label>
                  <div className="mt-3">
                    <label>
                      Description:{" "}
                      <textarea
                        className="titleArea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SaveListModal;
