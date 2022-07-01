import './App.css';
import React, { useState } from 'react';
import Student from './component/Student';
import From from '../src/From/From';
// import Stddisplay from './component/Stddisplay'


let Student_datas = [
    {
        fname: "Deep",
        lname: "Patel",
        city: "Surat"
    },
    {
        fname: "Sunny",
        lname: "Utsav",
        city: "Surat"
    },
    {
        fname: "Rudresh",
        lname: "Raval",
        city: "Surat"
    }
];


const App = (props) => {
    // fetch('http://192.168.1.96:3000/Students')
    // .then(response =>response.json())
    // .then(data => console.log(data))
  

    const [Student_data, setenterdata] = useState(Student_datas)
    const savedata = (enterdata) => {
        const updatestudent = [ ...Student_data,enterdata]
        setenterdata(updatestudent)

    }


    return (

        <div>
            <From savestddata={savedata} />
            <Student studentdata={Student_data} />


        </div>
    );
}

export default App;