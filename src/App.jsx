import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistrations from "./components/StudentRegistrations";
import NavBar from "./components/Navbar";
import { DatePicker } from "antd";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/course-types" element={<CourseTypes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-offerings" element={<CourseOfferings />} />
        <Route
          path="/student-registrations"
          element={<StudentRegistrations />}
        />
      </Routes>
    </Router>
  );
}

export default App;
