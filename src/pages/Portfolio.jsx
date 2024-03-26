import Project from "../components/Project";
import SGT from "../assets/SGT.png";
import MR from "../assets/MRSS.png";
import BD from "../assets/BD.png";

function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1 className="text-center" style={{fontFamily:"Helvetica", padding:"20px"}}>My Portfolio</h1>
                <hr />
            </div>
            <div className="row">
                <Project
                    style= "card col-sm-12 col-md-6"
                    title="Meal and Reel"
                    description="A website that utilizies the Yelp and OMDB APIs to search for restaurants and movie suggestions.
                    This website was created using vanilla HTML, CSS, Javascript, as well as the Bulma CSS library."
                    image={MR}
                    link="https://gsandman8.github.io/ReelAndMeal/"
                />
                <Project
                    style= "card col-sm-12 col-md-6"
                    title="Social Goals Tracker"
                    description="A full-stack application that allows users to create and track goals. 
                    This site utilizes a Prisma database, express.js and handlebars.js to create a dynamic website."
                    image={SGT}
                    link="https://sleepy-headland-38825-e68e0897078f.herokuapp.com/"
                />
                <Project
                    style= "card col-sm-12 col-md-12"
                    title="Blaze Displayz"
                    description="A full-stack storefront application that utilizes a MongoDB database, Apollo Server, and React.js to create a dynamic website. This website also uses the Stripe API for payment processing."
                    image={BD}
                    link="https://the-blazed-render-displayz.onrender.com/"
                />
                <div className="container col-12">
                    <h3 className="text-center">More Projects Coming Soon!</h3>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;