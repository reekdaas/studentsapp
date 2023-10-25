import { useDispatch, useSelector } from "react-redux";
import styles from "./student.module.css";
import { useEffect } from "react";
import { fetchStudents } from "../Slice/studentSlice";
import StudentList from "../Components/studentList";

export default function StudentPage() {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.students);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  // console.log(students);

  return (
    <div className={styles.studentPage}>
      <h1>Student View </h1>

      {status === "pending" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <StudentList data={students} />

      <h3>{/* <Link to={`/students/add`}>Add student</Link> */}</h3>
    </div>
  );
}
