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
                    <h1>About Me</h1>
                    <div className="container col-4">
                        <img src={ME} alt="Gage Sandman" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="container col-8">
                        <p>My name is Gage Sandman. 
                            I am a full-stack web developer with a background in sales and customer service. 
                            I am a graduate of the University of Utah's full-stack web development bootcamp. 
                            I am a hard worker and a quick learner. 
                            I am looking for a career in web development where I can use my skills to create a better user experience.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default Home;