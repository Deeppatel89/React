import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState()
  const [name, setname] = useState('')
  console.log(name)

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  const namehandleChange = (e)=>{
     setname(e.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:5000';
    const formData = new FormData();
    formData.append('user_file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      // alert(response.data);
      console.log(response);
    });

  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" name='user_file' onChange={handleChange} />
          <input type="text" onChange={namehandleChange} value={name} />
          <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default App