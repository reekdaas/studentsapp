import { Link, useParams } from "react-router-dom";
import styles from "./teacher.module.css";
import { useSelector } from "react-redux";
import { deleteTeachers } from "../Slice/teacherSlice";

export default function TeacherView() {
  const { id } = useParams();

  const teachers = useSelector((state) => state.teachers.teachers);
  // console.log(teachers, id);

  const foundTeacher = teachers.find(({ _id }) => _id === id);

  return (
    <div className={styles.teacherView}>
      {!foundTeacher ? (
        <h2>No Teacher Found</h2>
      ) : (
        <div>
          <h1>Teacher View</h1>
          <p>Name: {foundTeacher.name}</p>
          <p>Subject: {foundTeacher.subject}</p>
          <p>Phone Number: {foundTeacher.phoneNumber}</p>
          <Link to={`/teacher/edit/${foundTeacher._id}`} state={foundTeacher}>
            Edit Teacher
          </Link>
          <button
            onClick={() => {
              deleteTeachers(foundTeacher._id);
            }}
          >
            Delete Teacher
          </button>
        </div>
      )}
    </div>
  );
}
