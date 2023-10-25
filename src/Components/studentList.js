import { useNavigate } from "react-router-dom";
import styles from "./studentList.module.css";

export default function StudentList({ data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.studentList}>
      <table className={styles.studentTable}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
        </tr>

        {data.map((studnet) => (
          <tr
            onClick={() => {
              navigate(`/students/${studnet._id}`);
            }}
          >
            <td>{studnet.name}</td>
            <td>{studnet.age}</td>
            <td>{studnet.grade}</td>
          </tr>
        ))}
      </table>
      <button
        onClick={() => {
          navigate("/addStudent");
        }}
      >
        Add Student
      </button>
    </div>
  );
}
