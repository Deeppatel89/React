import React from "react";
import './Student.css';
import Stddisplay from "./Stddisplay";


const Student = (props) => {

    return (
        <div>
            <div className="maindiv">
                <table className="tablehead">
                    <tr className="headtr">
                        <th className="headth">FirstName</th>
                        <th className="headth">LastName</th>
                        <th className="headth">City</th>
                    </tr>
                </table>

                {
                    props.studentdata.map(
                        e => (
                            <Stddisplay 
                            fname={e.fname}
                                lname={e.lname}
                                city={e.city} />

                        )
                       
                    )
                }
                

            </div>
        </div>
    )

}
export default Student;