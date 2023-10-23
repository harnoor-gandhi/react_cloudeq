import React, { useState, useEffect } from 'react';

function Newthing({ onFormSubmit, editStudentId, storedData }) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (editStudentId) {
      
      const studentToEdit = storedData.find((student) => student.id === editStudentId);
      if (studentToEdit) {
        setFirstName(studentToEdit.FirstName);
        setLastName(studentToEdit.LastName);
        setNumber(studentToEdit.number);
        setEmail(studentToEdit.email);
        setGender(studentToEdit.gender);
        setSubjects(studentToEdit.subjects);
      }
    }
  }, [editStudentId, storedData]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    if (subjects.includes(selectedSubject)) {
      setSubjects(subjects.filter((subject) => subject !== selectedSubject));
    } else {
      setSubjects([...subjects, selectedSubject]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudentData = {
      FirstName: FirstName,
      LastName: LastName,
      number: number,
      email: email,
      gender: gender,
      subjects: subjects,
    };

    onFormSubmit(newStudentData);

    // Clear form 
    setFirstName('');
    setLastName('');
    setNumber('');
    setEmail('');
    setGender('male');
    setSubjects([]);
  };

  return (
    <div className='formclass'>
      <h1>Student Registration Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" value={FirstName} onChange={handleFirstNameChange} />
        </div>
        <br/>
        <div>
          <label htmlFor="lastname">LastName:</label>
          <input type="text" id="lastname" value={LastName} onChange={handleLastNameChange} />
        </div><br/>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <input type="tel" id="number" value={number} onChange={handleNumberChange} />
        </div><br/>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div><br/>
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender == 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender == 'Female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div><br/>
        <div>
          Subjects:
          <label>
            <input
              type="checkbox"
              name="subjects"
              value="Physics"
              checked={subjects.includes('Physics')}
              onChange={handleSubjectChange}
            />
            Physics
          </label>
          <label>
            <input
              type="checkbox"
              name="subjects"
              value="Chemistry"
              checked={subjects.includes('Chemistry')}
              onChange={handleSubjectChange}
            />
            Chemistry
          </label>
          <label>
            <input
              type="checkbox"
              name="subjects"
              value="Math"
              checked={subjects.includes('Math')}
              onChange={handleSubjectChange}
            />
            Maths
          </label>
          <label>
            <input
              type="checkbox"
              name="subjects"
              value="Social science"
              checked={subjects.includes('Social science')}
              onChange={handleSubjectChange}
            />
            Social science
          </label>
        </div><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Newthing;