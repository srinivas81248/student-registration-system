// import React, { useState, useEffect } from "react";
// import { Card, Input, Button, List, Select, message } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// const { Option } = Select;

// const StudentRegistrations = () => {
//   const [registrations, setRegistrations] = useState([]);
//   const [studentName, setStudentName] = useState("");
//   const [selectedOffering, setSelectedOffering] = useState(undefined);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedStudentName, setEditedStudentName] = useState("");
//   const [editedOffering, setEditedOffering] = useState("");

//   const courseOfferings =
//     JSON.parse(localStorage.getItem("courseOfferings")) || [];

//   useEffect(() => {
//     const storedRegistrations =
//       JSON.parse(localStorage.getItem("registrations")) || [];
//     setRegistrations(storedRegistrations);
//   }, []);

//   const registerStudent = () => {
//     if (studentName && selectedOffering) {
//       const newRegistration = { studentName, offering: selectedOffering };
//       const updatedRegistrations = [...registrations, newRegistration];
//       setRegistrations(updatedRegistrations);
//       localStorage.setItem(
//         "registrations",
//         JSON.stringify(updatedRegistrations)
//       );
//       setStudentName("");
//       setSelectedOffering("");
//       message.success("Student registered successfully!");
//     } else {
//       message.error(
//         "Please enter a student name and select a course offering."
//       );
//     }
//   };

//   const deleteRegistration = (index) => {
//     const updatedRegistrations = registrations.filter((_, i) => i !== index);
//     setRegistrations(updatedRegistrations);
//     localStorage.setItem("registrations", JSON.stringify(updatedRegistrations));
//     message.success("Registration deleted successfully!");
//   };

//   const startEditing = (index, registration) => {
//     setEditingIndex(index);
//     setEditedStudentName(registration.studentName);
//     setEditedOffering(registration.offering);
//   };

//   const saveEdit = (index) => {
//     if (editedStudentName && editedOffering) {
//       const updatedRegistration = {
//         studentName: editedStudentName,
//         offering: editedOffering,
//       };
//       const updatedRegistrations = [...registrations];
//       updatedRegistrations[index] = updatedRegistration;
//       setRegistrations(updatedRegistrations);
//       localStorage.setItem(
//         "registrations",
//         JSON.stringify(updatedRegistrations)
//       );
//       setEditingIndex(null);
//       setEditedStudentName("");
//       setEditedOffering("");
//       message.success("Registration updated successfully!");
//     } else {
//       message.error(
//         "Please enter a student name and select a course offering."
//       );
//     }
//   };

//   return (
//     <div style={{ padding: "24px" }}>
//       <h1>Student Registrations</h1>

//       <div style={{ marginBottom: "16px" }}>
//         <Input
//           placeholder="Enter student name"
//           value={studentName}
//           onChange={(e) => setStudentName(e.target.value)}
//           style={{ width: "200px", marginRight: "8px" }}
//         />
//         <Select
//           placeholder="Select Course Offering"
//           value={selectedOffering}
//           onChange={(value) => setSelectedOffering(value)}
//           style={{ width: "200px", marginRight: "8px" }}
//         >
//           {courseOfferings.map((offering, index) => (
//             <Option key={index} value={offering}>
//               {offering}
//             </Option>
//           ))}
//         </Select>
//         <Button type="primary" onClick={registerStudent}>
//           Register
//         </Button>
//       </div>

//       <List
//         grid={{ gutter: 16, column: 6 }}
//         dataSource={registrations}
//         renderItem={(registration, index) => (
//           <List.Item>
//             <Card
//               style={{
//                 backgroundColor: "#f0f2f5", // Light gray background
//                 borderColor: "#d9d9d9", // Light gray border
//                 borderRadius: "8px", // Rounded corners
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
//                 width: "200px", // Smaller width
//                 margin: "8px", // Add margin for spacing
//               }}
//               bodyStyle={{ padding: "12px" }} // Reduce padding inside the card
//               title={
//                 <span style={{ color: "#1890ff", fontSize: "14px" }}>
//                   {registration.studentName}
//                 </span> // Blue text for student name
//               }
//               actions={[
//                 editingIndex === index ? (
//                   <Button
//                     type="link"
//                     onClick={() => saveEdit(index)}
//                     style={{ color: "#52c41a", fontSize: "12px" }} // Green text for Save button
//                   >
//                     Save
//                   </Button>
//                 ) : (
//                   <EditOutlined
//                     key="edit"
//                     onClick={() => startEditing(index, registration)}
//                     style={{ color: "#1890ff", fontSize: "14px" }} // Blue icon for Edit
//                   />
//                 ),
//                 <DeleteOutlined
//                   key="delete"
//                   onClick={() => deleteRegistration(index)}
//                   style={{ color: "#ff4d4f", fontSize: "14px" }} // Red icon for Delete
//                 />,
//               ]}
//             >
//               {editingIndex === index ? (
//                 <div>
//                   <Input
//                     placeholder="Student Name"
//                     value={editedStudentName}
//                     onChange={(e) => setEditedStudentName(e.target.value)}
//                     style={{ width: "100%", marginBottom: "8px" }}
//                   />
//                   <Select
//                     placeholder="Select Course Offering"
//                     value={editedOffering}
//                     onChange={(value) => setEditedOffering(value)}
//                     style={{ width: "100%" }}
//                   >
//                     {courseOfferings.map((offering, i) => (
//                       <Option key={i} value={offering}>
//                         {offering}
//                       </Option>
//                     ))}
//                   </Select>
//                 </div>
//               ) : (
//                 <div style={{ textAlign: "center" }}>
//                   <p style={{ color: "#595959", fontSize: "12px" }}>
//                     {registration.offering}
//                   </p>{" "}
//                   {/* Dark gray text for course offering */}
//                 </div>
//               )}
//             </Card>
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default StudentRegistrations;

import React, { useState, useEffect } from "react";
import { Card, Input, Button, List, Select, message, Divider } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const StudentRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState(undefined);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStudentName, setEditedStudentName] = useState("");
  const [editedOffering, setEditedOffering] = useState("");
  const [filteredCourseType, setFilteredCourseType] = useState(undefined); // State for filtering

  const courseOfferings =
    JSON.parse(localStorage.getItem("courseOfferings")) || [];

  useEffect(() => {
    const storedRegistrations =
      JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(storedRegistrations);
  }, []);

  const registerStudent = () => {
    if (studentName && selectedOffering) {
      const newRegistration = { studentName, offering: selectedOffering };
      const updatedRegistrations = [...registrations, newRegistration];
      setRegistrations(updatedRegistrations);
      localStorage.setItem(
        "registrations",
        JSON.stringify(updatedRegistrations)
      );
      setStudentName("");
      setSelectedOffering("");
      message.success("Student registered successfully!");
    } else {
      message.error(
        "Please enter a student name and select a course offering."
      );
    }
  };

  const deleteRegistration = (index) => {
    const updatedRegistrations = registrations.filter((_, i) => i !== index);
    setRegistrations(updatedRegistrations);
    localStorage.setItem("registrations", JSON.stringify(updatedRegistrations));
    message.success("Registration deleted successfully!");
  };

  const startEditing = (index, registration) => {
    setEditingIndex(index);
    setEditedStudentName(registration.studentName);
    setEditedOffering(registration.offering);
  };

  const saveEdit = (index) => {
    if (editedStudentName && editedOffering) {
      const updatedRegistration = {
        studentName: editedStudentName,
        offering: editedOffering,
      };
      const updatedRegistrations = [...registrations];
      updatedRegistrations[index] = updatedRegistration;
      setRegistrations(updatedRegistrations);
      localStorage.setItem(
        "registrations",
        JSON.stringify(updatedRegistrations)
      );
      setEditingIndex(null);
      setEditedStudentName("");
      setEditedOffering("");
      message.success("Registration updated successfully!");
    } else {
      message.error(
        "Please enter a student name and select a course offering."
      );
    }
  };

  // Filter registrations based on selected course type
  const filteredRegistrations = filteredCourseType
    ? registrations.filter((registration) =>
        registration.offering.startsWith(filteredCourseType)
      )
    : registrations;

  return (
    <div style={{ padding: "24px" }}>
      <h1>Student Registrations</h1>

      <div style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={{ width: "200px", marginRight: "8px" }}
        />
        <Select
          placeholder="Select Course Offering"
          value={selectedOffering}
          onChange={(value) => setSelectedOffering(value)}
          style={{ width: "200px", marginRight: "8px" }}
        >
          {courseOfferings.map((offering, index) => (
            <Option key={index} value={offering}>
              {offering}
            </Option>
          ))}
        </Select>
        <Button type="primary" onClick={registerStudent}>
          Register
        </Button>
      </div>

<Divider/>

      {/* Filter by Course Type */}
      <div style={{ marginBottom: "16px" }}>
        <Select
          placeholder="Filter by Course Type"
          value={filteredCourseType}
          onChange={(value) => setFilteredCourseType(value)}
          style={{ width: "200px", marginRight: "8px" }}
          allowClear
        >
          {Array.from(
            new Set(courseOfferings.map((offering) => offering.split(" - ")[0]))
          ).map((type, index) => (
            <Option key={index} value={type}>
              {type}
            </Option>
          ))}
        </Select>
      </div>

      <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={filteredRegistrations} // Use filtered registrations
        renderItem={(registration, index) => (
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
                  {registration.studentName}
                </span> // Blue text for student name
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
                    onClick={() => startEditing(index, registration)}
                    style={{ color: "#1890ff", fontSize: "14px" }} // Blue icon for Edit
                  />
                ),
                <DeleteOutlined
                  key="delete"
                  onClick={() => deleteRegistration(index)}
                  style={{ color: "#ff4d4f", fontSize: "14px" }} // Red icon for Delete
                />,
              ]}
            >
              {editingIndex === index ? (
                <div>
                  <Input
                    placeholder="Student Name"
                    value={editedStudentName}
                    onChange={(e) => setEditedStudentName(e.target.value)}
                    style={{ width: "100%", marginBottom: "8px" }}
                  />
                  <Select
                    placeholder="Select Course Offering"
                    value={editedOffering}
                    onChange={(value) => setEditedOffering(value)}
                    style={{ width: "100%" }}
                  >
                    {courseOfferings.map((offering, i) => (
                      <Option key={i} value={offering}>
                        {offering}
                      </Option>
                    ))}
                  </Select>
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#595959", fontSize: "12px" }}>
                    {registration.offering}
                  </p>{" "}
                  {/* Dark gray text for course offering */}
                </div>
              )}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StudentRegistrations;
