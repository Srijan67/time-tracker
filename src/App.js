import "./App.css";
import StopWatch from "./components/StopWatch";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App flex flex-row text-white">
      <div className="stop-watch bg-slate-400 md:w-1/3">
        <StopWatch />
      </div>
      <div className="list-area text-center bg-yellow-800 md:w-2/3  ">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
