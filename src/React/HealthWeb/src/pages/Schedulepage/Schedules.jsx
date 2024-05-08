import Details from "./Details";
import { useState } from "react";
import "./Schedules.css"

const Schedule = () => {
    // const [detailsCount, setDetailsCount] = useState(1); 
    // detailsCount=1;
    return (
        <div className="main">
            <div className="top">
                <div className="schedule_nav">
                    <p>Medicine Timings</p>
                    <div className="straight"></div>
                    <p>Appointment Reminder</p>
                </div>
                {/* <span className="settings">
                    <p>Voice Alert Settings</p>
                </span> */}
            </div>
                <Details/>
                <br />
                <Details/>
                {/* <Details/>   */}
        <button className="btn" onClick={()=>repeat()}>Add more  &gt;</button>
    </div>        
    );
}
        
export default Schedule;
        
        {/* <div>
            <input type="text" placeholder="Enter the Dr.Name"/>
            <input type="text" placeholder="Enter the Medicine Name"/>
            <input type="text" placeholder="Enter the Contact number of the Doctor"/>
        </div> */}
