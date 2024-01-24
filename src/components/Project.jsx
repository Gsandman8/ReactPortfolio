function Project({title, description, image, link}) {
    return (
    <div className="card col-sm-12 col-md-6" >
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary" target="_blank" style={{backgroundColor:"#ffe4e1", color:"black", borderColor:"black"}}>Check it out!</a>
        </div>
    </div>
    );
}

export default Project;