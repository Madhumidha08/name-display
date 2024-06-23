import React, { useState } from 'react'

const App = () => {

  const [fullName , setFullName] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setFullName(`${e.target.elements["fname"].value} ${e.target.elements["lname"].value}`)
  }

    return (
      <section>
        <h1>Full Name Display</h1>
        <form action="" onSubmit={onSubmit}>
          <div>
            <label htmlFor="fname">First Name : </label>
            <input 
              type="text" 
              id='fname' 
              className='input' 
              // name = "fname"
              required 
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name : </label>
            <input 
              type="text" 
              id='lname' 
              className='input' 
              name = "lname"
              required 
            />
          </div>
          <button type='submit'>Submit</button>
        </form>

        {fullName.length !==0 && <p>Full Name: {fullName}</p>}
      </section>
    )
}

export default App