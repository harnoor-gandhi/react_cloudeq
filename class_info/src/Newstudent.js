import React, { useState } from 'react';

const Newstudent = ({ studentData, onDelete, onUpdate }) => {
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [updatedFirstName, setUpdatedFirstName] = useState('');
  const [updatedLastName, setUpdatedLastName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedNumber, setUpdatedNumber] = useState('');
  const [updatedGender, setUpdatedGender] = useState('male');
  const [updatedSubjects, setUpdatedSubjects] = useState([]);

  // Define the available subjects
  const availableSubjects = ['Physics', 'Chemistry', 'Math', 'Social science'];

  const handleEdit = (id) => {
    setEditingStudentId(id);

    const studentToEdit = studentData.find((student) => student.id === id);
    if (studentToEdit) {
      setUpdatedFirstName(studentToEdit.FirstName);
      setUpdatedLastName(studentToEdit.LastName);
      setUpdatedEmail(studentToEdit.email);
      setUpdatedNumber(studentToEdit.number);
      setUpdatedGender(studentToEdit.gender);
      setUpdatedSubjects(studentToEdit.subjects);
    }
  };

  const handleUpdate = (id) => {
    onUpdate(id, {
      FirstName: updatedFirstName,
      LastName: updatedLastName,
      email: updatedEmail,
      number: updatedNumber,
      gender: updatedGender,
      subjects: updatedSubjects,
    });

    // Clear 
    setEditingStudentId(null);
    setUpdatedFirstName('');
    setUpdatedLastName('');
    setUpdatedEmail('');
    setUpdatedNumber('');
    setUpdatedGender('male');
    setUpdatedSubjects([]);
  };

  const handleSubjectChange = (subject) => {
    if (updatedSubjects.includes(subject)) {
      setUpdatedSubjects(updatedSubjects.filter((subj) => subj !== subject));
    } else {
      setUpdatedSubjects([...updatedSubjects, subject]);
    }
  };

  return (
    <div className='newstudentclass'>
      <h2>Registered Students</h2>
      <table className='tableclass'>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Random ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Subjects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.length > 0 ? (
            studentData.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      value={updatedFirstName}
                      onChange={(e) => setUpdatedFirstName(e.target.value)}
                    />
                  ) : (
                    student.FirstName
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      value={updatedLastName}
                      onChange={(e) => setUpdatedLastName(e.target.value)}
                    />
                  ) : (
                    student.LastName
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      value={updatedEmail}
                      onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <input
                      type="text"
                      value={updatedNumber}
                      onChange={(e) => setUpdatedNumber(e.target.value)}
                    />
                  ) : (
                    student.number
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <select
                      value={updatedGender}
                      onChange={(e) => setUpdatedGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    student.gender
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <div>
                      {availableSubjects.map((subject) => (
                        <label key={subject}>
                          <input
                            type="checkbox"
                            name="updatedSubjects"
                            value={subject}
                            checked={updatedSubjects.includes(subject)}
                            onChange={() => handleSubjectChange(subject)}
                          />
                          {subject}
                        </label>
                      ))}
                    </div>
                  ) : (
                    student.subjects.join(', ')
                  )}
                </td>
                <td>
                  {editingStudentId === student.id ? (
                    <button onClick={() => handleUpdate(student.id)}>Update</button>
                  ) : (
                    <button onClick={() => handleEdit(student.id)}>Edit</button>
                  )}
                  <button onClick={() => onDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No student data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Newstudent;
