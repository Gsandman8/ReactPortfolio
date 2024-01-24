function Resume(){
    return(
        <div className="justify-content-center text-center row" style={{fontFamily:"Helvetica"}}>
            <h1 className="text-center" style={{ padding:"20px" }}>Resume</h1>
            <hr />
            <div className="container col-12 row justify-content-center">
                <div className="col-4">
                    <h3 className="text-center">Front-End Proficiencies</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">JQuery</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">Handlebars</li>
                        <li className="list-group-item">React.js</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="text-center">Back-End Proficiencies</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Express.js</li>
                        <li className="list-group-item">MySQL, Sequelize</li>
                        <li className="list-group-item">MongoDB, Mongoose</li>
                        <li className="list-group-item">ApolloServer, GraphQL</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="text-center">Other Skills</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Git Flow</li>
                        <li className="list-group-item">AGILE Development</li>
                        <li className="list-group-item">Heroku</li>
                        <li className="list-group-item">NPM</li>
                        <li className="list-group-item">RESTful API's</li>
                        <li className="list-group-item">Customer Service</li>
                        <li className="list-group-item">Sales</li>
                        <li className="list-group-item">Teamwork</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;