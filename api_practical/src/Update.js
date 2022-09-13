import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Update = () => {

    const location = useLocation()
    
  const[name,setname]= useState(location.state.data.name)

const nameChange = (event) => {
    setname(event.target.value)
}

  return (
<div className='container '>
            
            <div className="row mt-5 justify-content-evenly ">
                <div className="col-6 ">
                    <div className="container">
                        <div className="row  mt-4">
                            <div className="col">
                                <div className="container border border-primary  shadow p-3 mb-5 bg-body rounded  ">
                                    <div className="row  mt-5 ">
                                        <div className="col ">
                                            <form className='p-2 mb-5'  >
                                                <div className="form-group m-1">
                                                    <label for="exampleInputEmail1  ">Name</label>
                                                    <input type="text" className="form-control  border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                                    value={name}
                                                    onChange={nameChange}
                                                    name="name"/>

                                                </div>
                                                <div className="form-group m-1">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control  border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                                    
                                                    name="email"  />
                                                </div>
                                                <div className="form-group m-1">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control  border-primary" id="exampleInputPassword1" placeholder="Password"
                                                    
                                                    name="password"  />
                                                </div>
                                                <button type="submit" className="btn btn-success mt-2">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Update
