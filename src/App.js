import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted((p) => !p);
  }


  return (
    <div className="container">
      <div>
        <h1>Full Name Display</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>First Name:</p>
          <input type='text' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div>
          <p>Last Name:</p>
          <input type='text' value={lastName} onChange={(e) => setlastName(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {submitted ? <p>Full Name: {firstName} {lastName}</p>: <p></p>}
    </div>
  );
}

export default App;