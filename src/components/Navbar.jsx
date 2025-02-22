import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Use NavLink instead of Link
import { Menu } from "antd";

const NavBar = () => {
  let loc = useLocation();
  return (
    <div className="bg-gray-800 shadow-lg">
      <div className="container mx-auto">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[loc.pathname]}
          className="flex justify-center"
        >
          <Menu.Item key="/course-types">
            <NavLink
              to="/course-types"
              className={({ isActive }) =>
                `text-white hover:text-blue-300 ${isActive ? "bg-red-500" : ""}`
              }
            >
              Course Types
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/courses">
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `text-white hover:text-blue-300 ${isActive ? "bg-red-500" : ""}`
              }
            >
              Courses
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/course-offerings">
            <NavLink
              to="/course-offerings"
              className={({ isActive }) =>
                `text-white hover:text-blue-300 ${isActive ? "bg-red-500" : ""}`
              }
            >
              Course Offerings
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/student-registrations">
            <NavLink
              to="/student-registrations"
              className={({ isActive }) =>
                `text-white hover:text-blue-300 ${isActive ? "bg-red-500" : ""}`
              }
            >
              Student Registrations
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
