import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalStudents: 0,
  averageAttendance: 0,
  averageMarks: 0,
  topStudent: null,
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    updateSchoolStats: (state, action) => {
      const { totalStudents, averageMarks } = action.payload;

      state.totalStudents = totalStudents;
      state.averageMarks = averageMarks;
    },
    setTopStudent: (state, action) => {
      state.topStudent = action.payload;
    },
  },
});

export const { updateSchoolStats, setTopStudent } = schoolSlice.actions;
export default schoolSlice.reducer;
