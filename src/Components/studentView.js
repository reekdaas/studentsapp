import { Link, useParams } from "react-router-dom";
import styles from "./studentView.moudle.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudents } from "../Slice/studentSlice";

export default function StudentView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) =>
    state.students.students.find((s) => s._id === id)
  );
  // console.log(id);
  // console.log(student);

  const handleDelete = (id) => {
    dispatch(deleteStudents(id));
  };

  return (
    <div className={styles.studentView}>
      {!student ? (
        <h2>No Student found</h2>
      ) : (
        <div>
          <h2>Student Detail</h2>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Grade :{student.grade}</p>
          <p>Marks: {student.marks}</p>
          <Link to={`/students/edit/${student._id}`} state={student}>
            Edit Details
          </Link>
          <button
            onClick={() => {
              handleDelete(student._id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
