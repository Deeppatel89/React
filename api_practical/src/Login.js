
import React, { useState } from 'react'

const Login = () => {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    // const[formdata,setformdata] = useState([])
    


    const nameChange = (event)=>{
        setname(event.target.value)
    }
    const emailChange = (event)=>{
        setemail(event.target.value)
    }
    const passwordChange = (event)=>{
        setpassword(event.target.value)
    }

    const Submit = (e)=>{
        e.preventDefault()
        const submitdata = {
            name : name,
            Email : email,
            password : password,
        }
        console.log(submitdata)
        
// POST Api fetch
        fetch('http://192.168.1.96:3000/signup',{
            method : 'POST',
            body : JSON.stringify(submitdata),
            headers : {
                'content-type':'application/json'
            }
        }
        ).then(response => response.json())
        .then(result => {
          alert( result.message);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

//  const [user,setuser] = useState({
//     name:"",
//     email:"",
//     password:""
//  });
 
//  const[newdata,setnewdata] = useState([])

//  const handleinput =(e)=>{
//     const name1 = e.target.name
//     const value1 = e.target.value
//     // console.log(name1,value1)
//     setuser({...user,[name1]:value1})
    

//  }
//  const Submit = (e)=>{
//       e.preventDefault()

//       const data = {...user}
//         setnewdata([...newdata,data])
//         console.log(newdata)
//       }
 

 
     

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
                                            <form className='p-2 mb-5' onSubmit={Submit} >
                                                <div className="form-group m-1">
                                                    <label for="exampleInputEmail1  ">Name</label>
                                                    <input type="text" className="form-control  border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                                    onChange={nameChange}
                                                    value={name} 
                                                    name="name"/>

                                                </div>
                                                <div className="form-group m-1">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control  border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                                     onChange={emailChange}
                                                     value={email} 
                                                    name="email"  />
                                                </div>
                                                <div className="form-group m-1">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control  border-primary" id="exampleInputPassword1" placeholder="Password"
                                                     onChange={passwordChange}
                                                     value={password} 
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

export default Login