import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskDetails: (state, action) => {
      const { title, time, description } = action.payload;
      const task = state.tasks.find((t) => t.title === title);
      if (!task) {
        state.tasks.push({ title, description, time });
      } else {
        return console.log("already present, change title");
      }
    },
    setEditTask: (state, action) => {
      const { title, description } = action.payload;
      const task = state.tasks.find((t) => t.title === title);
      task.description = description;
    },
  },
});
export const { setTaskDetails, setEditTask } = taskSlice.actions;
export const selectTask = (state) => state.task.tasks;
export default taskSlice.reducer;
