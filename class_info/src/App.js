import React, { useEffect, useState } from 'react';
import Newthing from './Newthing';
import Newstudent from './Newstudent';
import './App.css';

const App = () => {
  const [studentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem('studentData')) || []
  );
  const [editStudentId, setEditStudentId] = useState(null);

  const storedData = JSON.parse(localStorage.getItem('studentData'));

  useEffect(() => {
    localStorage.setItem('studentData', JSON.stringify(studentData));
  }, [studentData]);

  const generateRandomID = () => {
    
    const randomID = Math.floor(100000 + Math.random() * 900000);
    return randomID.toString();
  };

  const handleFormSubmit = (newStudentData) => {
    newStudentData.id = generateRandomID(); 
    setStudentData((prevData) => [...prevData, newStudentData]);
  };

  const handleDeleteStudent = (id) => {
    setStudentData((prevData) => prevData.filter((student) => student.id !== id));
  };

  const handleEditStudent = (id) => {
    setEditStudentId(id);
  };

  const handleUpdateStudent = (id, updatedData) => {
    
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.id === id ? { ...student, ...updatedData } : student
      )
    );

    setEditStudentId(null);
  };

  return (
    <div className='app'>
      <Newthing
        onFormSubmit={handleFormSubmit}
        editStudentId={editStudentId}
        storedData={storedData}
      />
      <Newstudent
        studentData={studentData}
        onDelete={handleDeleteStudent}
        onEdit={handleEditStudent}
        onUpdate={handleUpdateStudent}
      />
    </div>
  );
};

export default App;
