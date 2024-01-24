import ME from "../assets/ME.png";
//import {useImage} from 'react-image'
//import {Img} from 'react-image'



function Home() {
    //const {src: meParsed} = useImage({
    //    srcList: ME
    //})
    return(
        <div className="container">
            <div className="col">
                <div className="row">
                    <h1 className="text-center" style={{fontFamily:"Helvetica"}}>About Me</h1>
                    <div className="container col-4">
                        <img src={ME} alt="Gage Sandman" className="img-fluid img-thumbnail rounded img-center justify-content-center align-items-center" 
                        style={{height: "300px", width:"190px", backgroundColor:"#ffe4e1", borderWidth:"20px", borderBlockColor:"#ffe4e1"}} />
                    </div>
                    <div className="container col-8 rounded" style={{backgroundColor:"#ffe4e1"}}>
                        <h3 style={{fontFamily:"Helvetica", padding:"10px"}}>Hello there! My name is Gage Sandman. 
                            I am a rookie full-stack web developer with a background in sales and customer service. 
                            I am a recent graduate of the University of Berkeley Extension full-stack web development bootcamp. 
                            Over I have dived into all aspects of full-stack web devlopment, from vanilla HTML, CSS, and Javascript to create static webpages, to using React.js, Node,js and GraphQL to create dynamic webpages with database capabilities. 
                            I am excited for opportunities to increase my knowledge and skill in the field of web-development.</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default Home;