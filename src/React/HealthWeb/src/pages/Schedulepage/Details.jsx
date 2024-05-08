import "./Schedules.css"
const Details=()=>{
    return(
        <div>
        <div className="img">
            <iframe src="https://alarm-clock-react.netlify.app/" frameborder="0"></iframe>
            <span className="medi_info">
                <h1>Medicine Name</h1>
                <div className="doc_info">
                    <p>Doctor name : </p>
                    <p>Contact number : </p>   
                </div>
            </span>
            <span className="medi_img">
                <h1>Medicine image</h1>
            </span>
        </div>
        <button className="edit">Edit ^ </button>
        </div>

    );
}
export default Details;