import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTask } from "../features/taskSlice";
import EditListModal from "./EditListModal";
import SaveListModal from "./SaveListModal";

const TaskList = () => {
  const tasks = useSelector(selectTask);
  const [modalVis, setModalVis] = useState(false);
  const [singleTask, setSingleTask] = useState();
  return (
    <div className="text-white min-h-screen">
      {tasks.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setModalVis(true);
              setSingleTask(item);
            }}
          >
            <div className="text-left text-lg ml-4 mt-2 w-1/2 bg-yellow-600 px-4 rounded-md flex flex-row justify-between">
              <div>
                <span className="">
                  {("0" + Math.floor((item.time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="">
                  {("0" + Math.floor((item.time / 1000) % 60)).slice(-2)}:
                </span>
                <span className="">
                  {("0" + ((item.time / 10) % 100)).slice(-2)}
                </span>
              </div>
              <div className="">
                <div className="text-right ml-auto">{item.title}</div>
                <div className="text-sm text-right"> {item.description}</div>
              </div>
            </div>
          </div>
        );
      })}
      {modalVis ? (
        <EditListModal vis={(e) => setModalVis(e)} {...singleTask} />
      ) : null}
    </div>
  );
};

export default TaskList;
