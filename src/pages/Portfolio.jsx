import Project from "../components/Project";
import SGT from "../assets/SGT.png";
import MR from "../assets/MRSS.png";

function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1 className="text-center">My Portfolio</h1>
            </div>
            <div className="row">
                <Project
                    title="Meal and Reel"
                    description="A website that utilizies the Yelp and OMDB APIs to search for restaurants and movie suggestions."
                    image={MR}
                    link="https://gsandman8.github.io/ReelAndMeal/"
                />
                <Project
                    title="Social Goals Tracker"
                    description="A full-stack aplicaiton that allows users to create and track goals."
                    image={SGT}
                    link="https://sleepy-headland-38825-e68e0897078f.herokuapp.com/"
                />
            </div>
        </div>
    );
}

export default Portfolio;