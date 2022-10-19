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
              console.log(item.title, "  des: ", item.description);
              setModalVis(true);
              setSingleTask(item);
            }}
          >
            <div className="text-left text-lg">
              <span className="digits">
                {("0" + Math.floor((item.time / 60000) % 60)).slice(-2)}:
              </span>
              <span className="digits">
                {("0" + Math.floor((item.time / 1000) % 60)).slice(-2)}:
              </span>
              <span className="digits mili-sec">
                {("0" + ((item.time / 10) % 100)).slice(-2)}
              </span>{" "}
              <span>{item.title}</span>
              <span> {item.description}</span>
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
