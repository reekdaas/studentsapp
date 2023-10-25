import "./App.css";
import StudentPage from "./Pages/student";
import { Link, Routes, Route } from "react-router-dom";
import TeacherPage from "./Pages/teacher";
import StudentView from "./Components/studentView";
import StudentAdd from "./Components/studentEdit";
import ClassView from "./Pages/class";
import TeacherView from "./Components/teacherView";
import TeacherEdit from "./Components/teacherEdit";
import School from "./Pages/school";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">Student Mangament App</div>
        <ul className="nav">
          <li>
            <Link to="/">Students</Link>
          </li>
          <li>
            <Link to="/class">Class</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
          <li>
            <Link to="/school">School</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/class" element={<ClassView />} />
        <Route path="/students/:id" element={<StudentView />} />
        <Route path="/students/edit/:id" element={<StudentAdd />} />
        <Route path="/addStudent" element={<StudentAdd />} />
        <Route path="/teacher/:id" element={<TeacherView />} />
        <Route path="/teacher/edit/:id" element={<TeacherEdit />} />
        <Route path="/addTeacher" element={<TeacherEdit />} />
        <Route path="/school" element={<School />} />
      </Routes>
    </div>
  );
}

export default App;
