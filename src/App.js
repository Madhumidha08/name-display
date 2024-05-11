import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if either of the fields is empty
    if (!firstName.trim() || !lastName.trim()) {
      setError("Both first name and last name are required.");
      setSubmitted(false); // Clear submission status
      return;
    }

    // If both fields are filled, clear error and proceed with submission
    setError("");
    setSubmitted(true);
  }

  return (
    <div className="container">
      <div>
        <h1>Full Name Display</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>First Name:</p>
          <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <p>Last Name:</p>
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submitted && firstName && lastName && <p>Full Name: {firstName} {lastName}</p>}
    </div>
  );
}

export default App;
