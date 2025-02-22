import React, { useState, useEffect } from 'react';
import { Card, Input, Button, List, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, []);

  const addCourse = () => {
    if (newCourse.trim()) {
      const updatedCourses = [...courses, newCourse];
      setCourses(updatedCourses);
      localStorage.setItem('courses', JSON.stringify(updatedCourses));
      setNewCourse('');
      message.success('Course added successfully!');
    } else {
      message.error('Please enter a valid course name.');
    }
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
    message.success('Course deleted successfully!');
  };

  const startEditing = (index, value) => {
    setEditingIndex(index);
    setEditedValue(value);
  };

  const saveEdit = (index) => {
    if (editedValue.trim()) {
      const updatedCourses = [...courses];
      updatedCourses[index] = editedValue;
      setCourses(updatedCourses);
      localStorage.setItem('courses', JSON.stringify(updatedCourses));
      setEditingIndex(null);
      setEditedValue('');
      message.success('Course updated successfully!');
    } else {
      message.error('Please enter a valid course name.');
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>Courses</h1>
      <div style={{ marginBottom: '16px' }}>
        <Input
          placeholder="Enter new course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          style={{ width: '300px', marginRight: '8px' }}
        />
        <Button type="primary" onClick={addCourse}>
          Add Course
        </Button>
      </div>

      <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={courses}
        renderItem={(course, index) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: '#f0f2f5', // Light gray background
                borderColor: '#d9d9d9', // Light gray border
                borderRadius: '8px', // Rounded corners
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
                width: '200px', // Smaller width
                margin: '8px', // Add margin for spacing
              }}
              bodyStyle={{ padding: '12px' }} // Reduce padding inside the card
              title={
                editingIndex === index ? (
                  <Input
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onPressEnter={() => saveEdit(index)}
                    style={{
                      backgroundColor: '#ffffff', // White background for input
                      borderColor: '#40a9ff', // Blue border for input
                      borderRadius: '4px', // Rounded corners for input
                      fontSize: '12px', // Smaller font size for input
                      padding: '4px', // Reduce padding for input
                    }}
                  />
                ) : (
                  <span style={{ color: '#1890ff', fontSize: '14px' }}>{course}</span> // Smaller font size for title
                )
              }
              actions={[
                editingIndex === index ? (
                  <Button
                    type="link"
                    onClick={() => saveEdit(index)}
                    style={{ color: '#52c41a', fontSize: '12px' }} // Smaller font size for Save button
                  >
                    Save
                  </Button>
                ) : (
                  <EditOutlined
                    key="edit"
                    onClick={() => startEditing(index, course)}
                    style={{ color: '#1890ff', fontSize: '14px' }} // Smaller icon size for Edit
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={() => deleteCourse(index)}
                  style={{ color: '#ff4d4f', fontSize: '14px' }} // Smaller icon size for Delete
                />,
              ]}
            >
              {editingIndex === index ? null : (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#595959', fontSize: '12px' }}>{course}</p>{' '}
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

export default Courses;