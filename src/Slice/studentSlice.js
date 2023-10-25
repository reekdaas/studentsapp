import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://assignment20.rittikdaas.repl.co/students"
    );
    const data = await response.data;
    // console.log(response);
    return data;
  }
);

export const postStudents = createAsyncThunk(
  "students/postStudents",
  async (studentInfo) => {
    const response = await axios.post(
      "https://assignment20.rittikdaas.repl.co/students",
      studentInfo
    );
    const data = await response.data;
    console.log(data);
    return data;
  }
);

export const updateStudents = createAsyncThunk(
  "students/updateStudents",
  async ({ studentID, studentInfo }) => {
    // console.log(studentID, studentInfo);
    const response = await axios.post(
      `https://assignment20.rittikdaas.repl.co/students/${studentID}`,
      studentInfo
    );
    const updatedData = await response.data;
    console.log(response);
    return updatedData;
  }
);

export const deleteStudents = createAsyncThunk(
  "students/deleteStudents",
  async (studentID) => {
    const response = await axios.delete(
      `https://assignment20.rittikdaas.repl.co/students/${studentID}`
    );
    const data = await response.data;
    // console.log(response.data);
    return data;
  }
);

const initialSchoolState = {
  students: [],
  status: "idle",
  error: null,
  filter: "All",
  sortBy: "name",
};

export const studentSlice = createSlice({
  name: "students",
  initialState: initialSchoolState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "pending";
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [postStudents.pending]: (state, action) => {
      state.status = "pending";
    },
    [postStudents.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.students.push(action.payload);
    },
    [postStudents.rejected]: (state, action) => {
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [updateStudents.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateStudents.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedStudents = action.payload;
      const studentIndex = state.students.findIndex(
        (student) => student._id === updateStudents._id
      );
      if (studentIndex !== -1) {
        state.students[studentIndex] = updatedStudents;
      }
    },
    [updateStudents.rejected]: (state, action) => {
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [deleteStudents.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteStudents.fulfilled]: (state, action) => {
      state.status = "success";
      const id = action.payload._id;
      const updatedStudents = state.students.filter(
        (student) => student._id !== id
      );
      state.students = updatedStudents;
    },
    [deleteStudents.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export const { setSortBy, setFilter } = studentSlice.actions;

export default studentSlice.reducer;
