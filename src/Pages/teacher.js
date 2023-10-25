import { useDispatch, useSelector } from "react-redux";
import styles from "./teacher.module.css";
import { useEffect } from "react";
import { fetchTeachers } from "../Slice/teacherSlice";
import TeacherList from "../Components/teacherList";

export default function TeacherPage() {
  const dispatch = useDispatch();
  const { teachers, status, error } = useSelector((state) => state.teachers);

  useEffect(() => {
    if (status === "idle" || status === "pending") {
      dispatch(fetchTeachers());
    }
  }, [dispatch, status]);

  // console.log(teachers);

  return (
    <div className={styles.teacherPage}>
      <h1>Teacher View</h1>
      {status === "pending" && <p>loading...</p>}

      {error && <p>Error: {error} </p>}
      <TeacherList data={teachers} />
    </div>
  );
}
