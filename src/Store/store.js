import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "../Slice/studentSlice";
import { teacherSlice } from "../Slice/teacherSlice";
import { schoolSlice } from "../Slice/schoolSlice";

export default configureStore({
  reducer: {
    students: studentSlice.reducer,
    teachers: teacherSlice.reducer,
    school: schoolSlice.reducer,
  },
});
