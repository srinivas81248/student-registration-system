import React, { useState, useEffect } from "react";
import { Card, Input, Button, List, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [newCourseType, setNewCourseType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  useEffect(() => {
    const storedCourseTypes =
      JSON.parse(localStorage.getItem("courseTypes")) || [];
    setCourseTypes(storedCourseTypes);
  }, []);

  const addCourseType = () => {
    if (newCourseType.trim()) {
      const updatedCourseTypes = [...courseTypes, newCourseType];
      setCourseTypes(updatedCourseTypes);
      localStorage.setItem("courseTypes", JSON.stringify(updatedCourseTypes));
      setNewCourseType("");
      message.success("Course type added successfully!");
    } else {
      message.error("Please enter a valid course type.");
    }
  };

  const deleteCourseType = (index) => {
    const updatedCourseTypes = courseTypes.filter((_, i) => i !== index);
    setCourseTypes(updatedCourseTypes);
    localStorage.setItem("courseTypes", JSON.stringify(updatedCourseTypes));
    message.success("Course type deleted successfully!");
  };

  const startEditing = (index, value) => {
    setEditingIndex(index);
    setEditedValue(value);
  };

  const saveEdit = (index) => {
    if (editedValue.trim()) {
      const updatedCourseTypes = [...courseTypes];
      updatedCourseTypes[index] = editedValue;
      setCourseTypes(updatedCourseTypes);
      localStorage.setItem("courseTypes", JSON.stringify(updatedCourseTypes));
      setEditingIndex(null);
      setEditedValue("");
      message.success("Course type updated successfully!");
    } else {
      message.error("Please enter a valid course type.");
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Course Types</h1>
      <div style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Enter new course type"
          value={newCourseType}
          onChange={(e) => setNewCourseType(e.target.value)}
          style={{ width: "300px", marginRight: "8px" }}
        />
        <Button type="primary" onClick={addCourseType}>
          Add Course Type
        </Button>
      </div>

      <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={courseTypes}
        renderItem={(type, index) => (
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
                editingIndex === index ? (
                  <Input
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onPressEnter={() => saveEdit(index)}
                    style={{
                      backgroundColor: "#ffffff", // White background for input
                      borderColor: "#40a9ff", // Blue border for input
                      borderRadius: "4px", // Rounded corners for input
                      fontSize: "12px", // Smaller font size for input
                      padding: "4px", // Reduce padding for input
                    }}
                  />
                ) : (
                  <span style={{ color: "#1890ff", fontSize: "14px" }}>
                    {type}
                  </span> // Smaller font size for title
                )
              }
              actions={[
                editingIndex === index ? (
                  <Button
                    type="link"
                    onClick={() => saveEdit(index)}
                    style={{ color: "#52c41a", fontSize: "12px" }} // Smaller font size for Save button
                  >
                    Save
                  </Button>
                ) : (
                  <EditOutlined
                    key="edit"
                    onClick={() => startEditing(index, type)}
                    style={{ color: "#1890ff", fontSize: "14px" }} // Smaller icon size for Edit
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={() => deleteCourseType(index)}
                  style={{ color: "#ff4d4f", fontSize: "14px" }} // Smaller icon size for Delete
                />,
              ]}
            >
              {editingIndex === index ? null : (
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#595959", fontSize: "12px" }}>{type}</p>{" "}
                  {/* Smaller font size for content */}
                </div>
              )}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CourseTypes;
