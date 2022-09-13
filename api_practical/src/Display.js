import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Update from './Update'
import './Display.css'


const Display = () => {
  const [ApiData, setApiData] = useState([])

  // Get Api fetch
  const fetchdata = () => {
    fetch('http://192.168.1.96:3000/Students')
      .then(response => response.json())
      .then(data => setApiData(data))
  }
  useEffect(() => {
    fetchdata()

  }, [])


//Delete Api fetch
  const deletedata = (e) => {
    // console.log(JSON.stringify(e));
    fetch('http://192.168.1.96:3000/delete', {
      method: 'POST',
      body: JSON.stringify(e),
      headers: {
        'content-type': 'application/json'
      }

    }).then(response => {
      response.json()
      fetchdata()

    })
      .then((data) => console.log(data))
  }
  const Updatedata = (e) =>{

  
  }

  


  // console.log(ApiData)

  return (

    <table >
      <tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PASSWORD</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
      {
        ApiData.map((e) => {
          return (
            <>
        
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.Email}</td>
                <td>{e.password}</td>
                <td><button className='btn' onClick={() => { deletedata(e) }} >Delete</button></td>
                <td><button className='btn'><Link to="/Update"state={{ data:e}}>Update</Link></button></td>
              </tr>
            </>
          )
        })
      }

    </table>
  )
}

export default Display