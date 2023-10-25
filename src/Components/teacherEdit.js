import { useDispatch } from "react-redux";
import styles from "./teacherEdit.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { updateTeachers } from "../Slice/teacherSlice";

export default function TeacherEdit() {
  const { dispatch } = useDispatch();
  const { state } = useLocation();
  const teacher = state ? state : null;
  const [teacherData, setTeacherData] = useState({
    name: teacher ? teacher.name : "",
    subject: teacher ? teacher.subject : "",
    phoneNumber: teacher ? teacher.phoneNumber : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (teacher) {
      dispatch(
        updateTeachers({ teacherID: teacher._id, teacherData: teacherData })
      );
    } else {
      updateTeachers(teacherData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeacherData((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className={styles.teacherEdit}>
      <form className={styles.teacherForm} onSubmit={handleSubmit}>
        <div className={styles.teacherFormRow}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teacherData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.teacherFormRow}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            value={teacherData.subject}
            name="subject"
            id="subject"
            onChange={handleChange}
          />
        </div>
        <div className={styles.teacherFormRow}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            value={teacherData.phoneNumber}
            name="phoneNumber"
            id="number"
            onChange={handleChange}
          />
        </div>
        <button type="submit">{teacher ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}
