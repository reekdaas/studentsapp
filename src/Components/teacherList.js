import { useNavigate } from "react-router-dom";
import styles from "./teacherList.module.css";

export default function TeacherList({ data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.teacherlist}>
      {" "}
      <table className={styles.teacherTable}>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Phone Number</th>
        </tr>

        {data.map((teacher) => (
          <tr
            onClick={() => {
              // console.log(data);
              navigate(`/teacher/${teacher._id}`);
            }}
          >
            <td>{teacher.name}</td>
            <td>{teacher.subject}</td>
            <td>{teacher.phoneNumber}</td>
          </tr>
        ))}
      </table>
      <button
        onClick={() => {
          navigate("/addTeacher");
        }}
      >
        Add Teacher
      </button>
    </div>
  );
}
