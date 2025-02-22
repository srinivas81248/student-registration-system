Student Registration System
This is a simple Student Registration System built using React and Ant Design. It allows you to manage course types, courses, course offerings, and student registrations. The app uses local storage to save data, so your information stays even after refreshing the page.

Features
Course Types:

Add new course types (e.g., Individual, Group, Special).

Edit or delete existing course types.

Courses:

Add new courses (e.g., Hindi, English, Urdu).

Edit or delete existing courses.

Course Offerings:

Create new course offerings by combining a course type and a course (e.g., "Individual - English").

Edit or delete existing course offerings.

Student Registrations:

Register students for available course offerings.

Edit or delete student registrations.

Filter registrations by course type.

How It Works

1. Course Types
   Add a Course Type:

Enter a new course type (e.g., "Individual") and click Add.

Edit a Course Type:

Click the Edit icon on a course type card, update the name, and click Save.

Delete a Course Type:

Click the Delete icon on a course type card.

2. Courses
   Add a Course:

Enter a new course (e.g., "English") and click Add.

Edit a Course:

Click the Edit icon on a course card, update the name, and click Save.

Delete a Course:

Click the Delete icon on a course card.

3. Course Offerings
   Add a Course Offering:

Select a course type (e.g., "Individual") and a course (e.g., "English"), then click Add Offering.

Edit a Course Offering:

Click the Edit icon on a course offering card, update the course type or course, and click Save.

Delete a Course Offering:

Click the Delete icon on a course offering card.

4. Student Registrations
   Register a Student:

Enter a student name (e.g., "John Doe") and select a course offering (e.g., "Individual - English"), then click Register.

Edit a Registration:

Click the Edit icon on a registration card, update the student name or course offering, and click Save.

Delete a Registration:

Click the Delete icon on a registration card.

Filter Registrations:

Use the Filter by Course Type dropdown to show only registrations for a specific course type (e.g., "Individual").

How to Use the App
Add Course Types and Courses:

Go to the Course Types and Courses sections to add, edit, or delete course types and courses.

Create Course Offerings:

Go to the Course Offerings section to combine course types and courses into offerings (e.g., "Individual - English").

Register Students:

Go to the Student Registrations section to register students for available course offerings.

Filter Registrations:

Use the Filter by Course Type dropdown in the Student Registrations section to view registrations for a specific course type.

Technologies Used
React: A JavaScript library for building user interfaces.

Ant Design: A UI library for React with pre-built components like cards, buttons, and dropdowns.

Local Storage: Used to save data in the browser so it persists even after refreshing the page.

Tailwind CSS: A utility-first CSS framework for styling (optional, if you decide to use it).

How to Run the App
Clone the Repository:

bash
Copy
git clone https://github.com/srinivas81248/student-registration-system.git
Install Dependencies:

bash
Copy
cd student-registration-system
npm install
Start the App:

bash
Copy
npm start
Open the App:

Open your browser and go to http://localhost:3000.

Future Improvements
Authentication:

Add login functionality for admins and students.

Search Bar:

Add a search bar to filter courses, offerings, or registrations by name.

Responsive Design:

Make the app mobile-friendly.

Database Integration:

Replace local storage with a backend database (e.g., Firebase, MongoDB).


