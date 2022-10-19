import React, { useEffect, useState } from "react";
import SaveListModal from "./SaveListModal";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [modalVis, setModalVis] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(true);
    setIsActive(false);
  };

  const handleSave = (event) => {
    setModalVis(event);
  };
  return (
    <div className="h-screen flex flex-col justify-center pb-11">
      <div className="font-bold text-6xl mt-auto">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-section mt-auto flex justify-between items-center px-8">
        <button
          disabled={isActive}
          className={
            isActive
              ? "bg-gray-800 px-6 py-3 border-2 rounded-lg"
              : "bg-blue-700 px-6 py-3 border-2 rounded-lg"
          }
          onClick={handleStart}
        >
          Start
        </button>
        <button
          disabled={isPaused}
          className={
            isPaused
              ? "bg-gray-800 px-6 py-3 border-2 rounded-lg"
              : "bg-blue-700 px-6 py-3 border-2 rounded-lg"
          }
          onClick={handlePauseResume}
        >
          Pause
        </button>
        <button
          className="bg-blue-700 px-6 py-3 border-2 rounded-lg"
          onClick={() => handleSave(true)}
        >
          Save
        </button>
      </div>
      {modalVis ? (
        <SaveListModal vis={(e) => handleSave(e)} timer={time} />
      ) : null}
    </div>
  );
};

export default StopWatch;
