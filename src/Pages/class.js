import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setFilter } from "../Slice/studentSlice";
import styles from "./class.module.css";
import StudentList from "../Components/studentList";

export default function ClassView() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const filter = useSelector((state) => state.students.filter);
  const sortBy = useSelector((state) => state.students.sortBy);

  const filterStudents = students.filter((student) => {
    if (filter === "All") return true;
    // console.log(student.gender.toLowerCase());
    return student.gender.toLowerCase() === filter.toLowerCase();
  });
  const sortStudents = [...filterStudents].sort((a, b) => {
    if (sortBy === "name") return a?.name.localeCompare(b?.name);
    else if (sortBy === "marks") return b?.marks - a?.marks;
  });

  console.log(filterStudents);

  return (
    <div className={styles.classView}>
      <h1>Class view</h1>
      <select
        name="filter"
        value={filter}
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        name="sort"
        value={sortBy}
        onChange={(e) => {
          dispatch(setSortBy(e.target.value));
        }}
      >
        <option value="name">Name</option>
        <option value="marks">Marks</option>
      </select>
      <StudentList data={sortStudents} />
    </div>
  );
}
