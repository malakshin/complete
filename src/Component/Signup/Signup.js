import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <div className="signup-section">
        <h1>Signup Page</h1>
        <form>
          <div className="signup-form">
            <div className="signup-section1">
              <input type="text" placeholder="Enter your First Name" required />
              <input type="text" placeholder="Enter Your Last Name" required />
              <input type="tel" placeholder="Enter Your Phone Number" required />
              <input type="text" placeholder="Enter Your UserName" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="password" placeholder="Enter Your Password" required />
              <input type="password" placeholder="Confirm Password" required />
            </div>
            
            <div className="signup-section2">
              <input type="text" placeholder="Gender" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Education Level" required />
              <input type="text" placeholder="Language" required />
              <input type="date" placeholder="Date of Birth" required />
            </div>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-section">
        <div className="placeholder"></div>
        <img src="../signpic.png" alt="Description" />
        
      </div>
    </div>
  );
};

export default Signup;