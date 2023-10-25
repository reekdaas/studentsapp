import { useDispatch, useSelector } from "react-redux";
import styles from "./school.module.css";
import { useEffect } from "react";
import { setTopStudent, updateSchoolStats } from "../Slice/schoolSlice";

export default function School() {
  const students = useSelector((state) => state.students.students);
  const { totalStudents, averageMarks, topStudent } = useSelector(
    (state) => state.school
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const totalStudents = students.length;

    const totalMarks = students.reduce((acc, s) => acc + s.marks, 0);

    const avgMarks = Math.floor(totalMarks / totalStudents);
    const topStudent = students.reduce(
      (acc, curr) => (acc.marks > curr.marks ? acc.name : curr.name),
      students[0]
    );

    dispatch(updateSchoolStats({ totalStudents, averageMarks: avgMarks }));
    dispatch(setTopStudent(topStudent));
  }, [dispatch, students]);

  console.log(averageMarks, topStudent);

  return (
    <div className={styles.schoolPage}>
      <p>Total Students:{totalStudents}</p>

      <p>Average Marks: {averageMarks}</p>
      <p>Top Student: {topStudent}</p>
    </div>
  );
}
