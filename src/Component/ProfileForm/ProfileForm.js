import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ handleRoleChange, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [language, setLanguage] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(''); 

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleImageUpload = (e) => setImage(URL.createObjectURL(e.target.files[0]));
  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : 'M';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role) {
      onSubmit(role);
    } else {
      setMessage('Please select a role');
    }
  };

  return (
    <div className="profile-form">
      <div className="profile-pic">
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <div className="placehold">
            <span className="initial">{getInitial(firstName)}</span>
          </div>
        )}
        <p className='yourname'>{firstName} {lastName}</p>
        <input type="file" onChange={handleImageUpload} />
      </div>

      <form onSubmit={handleSubmit} className="form-fields">
        <div>
          <label className="label">First name</label>
          <input className='theform' type="text" value={firstName} onChange={handleFirstNameChange} required />
        </div>
        <div>
          <label className="label">Last name</label>
          <input className='theform' type="text" value={lastName} onChange={handleLastNameChange} required />
        </div>
        <div>
          <label className="label">Phone Number</label>
          <input className='theform' type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label className="label">User name</label>
          <input className='theform' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label className="label">Email</label>
          <input className='theform' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="label">Gender</label>
          <input className='theform' type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </div>
        <div>
          <label className="label">City</label>
          <input className='theform' type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <label className="label">Education level</label>
          <input className='theform' type="text" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} required />
        </div>
        <div>
          <label className="label">Language</label>
          <input className='theform' type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>
        <div>
          <label className="label">Date of birth</label>
          <input className='theform' type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div>
          <label className="label">Student or Trainer</label>
          <select className='theform' value={role} onChange={(e) => { 
              setRole(e.target.value); 
              handleRoleChange(e);
          }} required>
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Trainer">Trainer</option>
          </select>
        </div>
        <button className='subinfo' type="submit">Submit</button>
      </form>

      {}
      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default ProfileForm;