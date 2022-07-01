import React from "react";
import './Stddisplay.css';
// import Student from "./Student";

const Stddisplay = (props) => {

    return (
        <table className="fild">
            <tr className="headtr">
                <td className="headth">{props.fname}</td>
                <td className="headth">{props.lname}</td>
                <td className="headth">{props.city}</td>
            </tr>
        </table>


    );

}
export default Stddisplay;