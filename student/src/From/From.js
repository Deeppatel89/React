import React, { useState } from "react";
import './From.css';



const From = (props) => {

    const [enterfname, setfname] = useState('')
    const [enterlname, setlname] = useState('')
    const [entercity, setcity] = useState('')

    const fnamechange = (event) => {
        setfname(event.target.value)
    }
    const lnamechange = (event) => {
        setlname(event.target.value)
    }
    const citychange = (event) => {
        setcity(event.target.value)
    }

    const clicked = (event) =>{
        event.preventDefault();

        const studentdata = {
            fname : enterfname,
            lname : enterlname,
            city : entercity
        }
       props.savestddata(studentdata)

       

        console.log(studentdata);

    }


    return (
        <form className="from" onSubmit={clicked} >

            <label>First Name</label>
            <input type="text" onChange={fnamechange} /><br />
            <label>Last Name</label>
            <input type="text" onChange={lnamechange} /><br />
            <label>City</label>
            <input type="text" onChange={citychange} /><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default From;

