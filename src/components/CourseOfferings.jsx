import React, { useState, useEffect } from "react";
import { Card, Input, Button, List, Select, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const CourseOfferings = () => {
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(undefined);
  const [selectedCourseType, setSelectedCourseType] = useState(undefined);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedCourse, setEditedCourse] = useState("");
  const [editedCourseType, setEditedCourseType] = useState("");

  const courses = JSON.parse(localStorage.getItem("courses")) || [];
  const courseTypes = JSON.parse(localStorage.getItem("courseTypes")) || [];

  useEffect(() => {
    const storedOfferings =
      JSON.parse(localStorage.getItem("courseOfferings")) || [];
    setCourseOfferings(storedOfferings);
  }, []);

  const addCourseOffering = () => {
    if (selectedCourse && selectedCourseType) {
      const newOffering = `${selectedCourseType} - ${selectedCourse}`;
      const updatedOfferings = [...courseOfferings, newOffering];
      setCourseOfferings(updatedOfferings);
      localStorage.setItem("courseOfferings", JSON.stringify(updatedOfferings));
      setSelectedCourse("");
      setSelectedCourseType("");
      message.success("Course offering added successfully!");
    } else {
      message.error("Please select both a course type and a course.");
    }
  };

  const deleteCourseOffering = (index) => {
    const updatedOfferings = courseOfferings.filter((_, i) => i !== index);
    setCourseOfferings(updatedOfferings);
    localStorage.setItem("courseOfferings", JSON.stringify(updatedOfferings));
    message.success("Course offering deleted successfully!");
  };

  const startEditing = (index, offering) => {
    const [courseType, course] = offering.split(" - ");
    setEditingIndex(index);
    setEditedCourseType(courseType);
    setEditedCourse(course);
  };

  const saveEdit = (index) => {
    if (editedCourseType && editedCourse) {
      const updatedOffering = `${editedCourseType} - ${editedCourse}`;
      const updatedOfferings = [...courseOfferings];
      updatedOfferings[index] = updatedOffering;
      setCourseOfferings(updatedOfferings);
      localStorage.setItem("courseOfferings", JSON.stringify(updatedOfferings));
      setEditingIndex(null);
      setEditedCourseType("");
      setEditedCourse("");
      message.success("Course offering updated successfully!");
    } else {
      message.error("Please select both a course type and a course.");
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Course Offerings</h1>
      <div style={{ marginBottom: "16px" }}>
        <Select
          placeholder="Select Course Type"
          value={selectedCourseType}
          onChange={(value) => setSelectedCourseType(value)}
          style={{ width: "200px", marginRight: "8px" }}
        >
          {courseTypes.map((type, index) => (
            <Option key={index} value={type}>
              {type}
            </Option>
          ))}
        </Select>
        <Select
          placeholder="Select Course"
          value={selectedCourse}
          onChange={(value) => setSelectedCourse(value)}
          style={{ width: "200px", marginRight: "8px" }}
        >
          {courses.map((course, index) => (
            <Option key={index} value={course}>
              {course}
            </Option>
          ))}
        </Select>
        <Button type="primary" onClick={addCourseOffering}>
          Add Offering
        </Button>
      </div>

      <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={courseOfferings}
        renderItem={(offering, index) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: "#f0f2f5", // Light gray background
                borderColor: "#d9d9d9", // Light gray border
                borderRadius: "8px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
                width: "200px", // Smaller width
                margin: "8px", // Add margin for spacing
              }}
              bodyStyle={{ padding: "12px" }} // Reduce padding inside the card
              title={
                <span style={{ color: "#1890ff", fontSize: "14px" }}>
                  {offering}
                </span>
              }
              actions={[
                editingIndex === index ? (
                  <Button
                    type="link"
                    onClick={() => saveEdit(index)}
                    style={{ color: "#52c41a", fontSize: "12px" }} // Green text for Save button
                  >
                    Save
                  </Button>
                ) : (
                  <EditOutlined
                    key="edit"
                    onClick={() => startEditing(index, offering)}
                    style={{ color: "#1890ff", fontSize: "14px" }} // Blue icon for Edit
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={() => deleteCourseOffering(index)}
                  style={{ color: "#ff4d4f", fontSize: "14px" }} // Red icon for Delete
                />,
              ]}
            >
              {editingIndex === index ? (
                <div>
                  <div>
                    <Select
                      placeholder="Select Course Type"
                      value={editedCourseType}
                      onChange={(value) => setEditedCourseType(value)}
                    >
                      {courseTypes.map((type, i) => (
                        <Option key={i} value={type}>
                          {type}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Select
                      placeholder="Select Course"
                      value={editedCourse}
                      onChange={(value) => setEditedCourse(value)}
                    >
                      {courses.map((course, i) => (
                        <Option key={i} value={course}>
                          {course}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#595959", fontSize: "12px" }}>
                    {offering}
                  </p>{" "}
                  {/* Dark gray text for content */}
                </div>
              )}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CourseOfferings;


