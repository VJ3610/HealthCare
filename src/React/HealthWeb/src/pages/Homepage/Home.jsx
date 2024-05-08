import "./Home.css";
const Home = () => {
    return (
        <div className="main">

            <div className="back">
                <span className="intro">
                    <h1>An Easy Medicine Assistant</h1><br />
                    <p>This is a platform where you can get to know about your future appointments  with the doctor. </p><br />
                    <p>Here you can also get a detailed information about the prescribed
                        medicine.  </p><br />
                    <p>The most important thing is that your assistant reminds you with your medicine intake time as per your doctors prescription.</p><br />
                <div>
                    <button className="exploreBtn">Explore More </button>
                </div>
                </span>
                <span>
                    <img className="ai" src="https://nlaic.com/wp-content/uploads/2021/06/AI-for-Health.jpg" alt="" />
                </span>
            </div>
        </div>
    );
}

export default Home;