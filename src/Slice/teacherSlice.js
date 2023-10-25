import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get(
      "https://assignment20.rittikdaas.repl.co/teacher"
    );
    // console.log("hello");
    const data = await response.data.allTeacher;
    console.log(response);
    return data;
  }
);
export const postTeacher = createAsyncThunk(
  "teachers/postTeacher",
  async (teacherData) => {
    const response = await axios.post(
      "https://assignment20.rittikdaas.repl.co/teacher",
      teacherData
    );
    const data = await response.data.savedTeacher;
    console.log(response);
    return data;
  }
);

export const updateTeachers = createAsyncThunk(
  "teachers/updateTeachers",
  async ({ teacherID, teacherData }) => {
    const response = await axios.post(
      `https://assignment20.rittikdaas.repl.co/teacher/${teacherID}`,
      teacherData
    );
    const data = await response.data.updatedData;
    console.log(response);
    return data;
  }
);

export const deleteTeachers = createAsyncThunk(
  "teachers/deleteTeachers",
  async (teacherID) => {
    const response = await axios.delete(
      `https://assignment20.rittikdaas.repl.co/teacher/${teacherID}`
    );
    const data = await response.data.deletedTeacher;
    console.log(response);
    return data;
  }
);

const initialTeacherState = {
  teachers: [],
  status: "idle",
  error: null,
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState: initialTeacherState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error);
      state.error = action.error.error;
    },
    [postTeacher.pending]: (state, action) => {
      state.status = "pending";
    },
    [postTeacher.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers.push(action.payload);
    },
    [postTeacher.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error);
      state.error = action.error.error;
    },
    [updateTeachers.pending]: (state, action) => {
      state.status = "pending";
    },
    [updateTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      const id = action.payload._id;
      const teacherIndex = state.teachers.findIndex(
        (teacher) => teacher._id === id
      );
      if (teacherIndex !== -1) {
        state.teachers[teacherIndex] = action.payload;
      }
    },
    [updateTeachers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteTeachers.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.teachers = state.teachers.filter(
        ({ _id }) => _id !== action.payload._id
      );
    },
    [deleteTeachers.rejected]: (state, action) => {
      state.status = "rejected";
      console.log(action.error);
      state.error = action.error.message;
    },
  },
});

export default teacherSlice.reducer;
