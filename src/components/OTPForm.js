// OTPForm.js
import firebase from './firebase';  // นำเข้า Firebase ที่กำหนดไว้ในไฟล์ firebase.js
import { useState } from 'react';

const OTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',  // กำหนดให้ Recaptcha ซ่อน
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        setMessage('OTP sent! Please check your phone.');
      })
      .catch((error) => {
        setMessage('Error sending OTP: ' + error.message);
      });
  };

  const verifyOtp = () => {
    if (confirmationResult) {
      confirmationResult.confirm(otp)
        .then((result) => {
          setMessage('OTP Verified successfully!');
        })
        .catch((error) => {
          setMessage('Invalid OTP');
        });
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={phoneNumber} 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        placeholder="Enter phone number"
      />
      <button onClick={sendOtp}>Send OTP</button>

      <div id="recaptcha-container"></div> {/* Recaptcha container */}

      {confirmationResult && (
        <div>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      <p>{message}</p>
    </div>
  );
};

export default OTPForm;
