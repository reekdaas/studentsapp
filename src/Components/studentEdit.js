import { useLocation } from "react-router-dom";
import styles from "./studentEdit.module.css";
import { useState } from "react";
import { postStudents, updateStudents } from "../Slice/studentSlice";
import { useDispatch } from "react-redux";

export default function StudentAdd() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const student = state ? state : null;
  const [studentData, setStudentData] = useState({
    name: student ? student?.name : "",
    age: student ? student?.age : "",
    grade: student ? student?.grade : "",
    marks: student ? student?.marks : "",
    gender: student ? student.gender : "Male",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (student) {
      dispatch(
        updateStudents({ studentID: student._id, studentInfo: studentData })
      );
    } else {
      postStudents(studentData);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // console.log(type);
    if (type === "radio") {
      value === "Male"
        ? setStudentData((state) => ({ ...state, gender: "Male" }))
        : setStudentData((state) => ({ ...state, gender: "Female" }));
    } else {
      setStudentData((state) => ({ ...state, [name]: value }));
    }
  };

  return (
    <div className={styles.studentAdd}>
      <form className={styles.studentForm} onSubmit={handleSubmit}>
        <div className={styles.formrow}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formrow}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={studentData.age}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formrow}>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formrow}>
          <label htmlFor="marks">Marks</label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={studentData.marks}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formrow}>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={
              studentData.gender && studentData.gender.toLowerCase() === "male"
            }
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={
              studentData.gender &&
              studentData.gender.toLowerCase() === "female"
            }
            onChange={handleChange}
          />
          Female
        </div>
        <button type="submit">{student ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}
