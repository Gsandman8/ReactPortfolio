import { useState} from "react";
import GITHUB from "../assets/GITHUB.png";
import LINKEDIN from "../assets/LINKEDIN.png";
import GMAIL2 from "../assets/GMAIL.png";
import OUTLOOK from "../assets/OUTLOOK.png";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function handleClick(e) {
        e.preventDefault();
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center" style={{fontFamily:"Helvetica", padding:"20px"}}>Contact Me</h1>
                    <hr />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What's on your mind?" onChange={e => setMessage(e.target.value)} value={message}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary"
                         style={{backgroundColor:"#ffe4e1", color:"black", borderColor:"black"}}
                         onClick={handleClick}>Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="container col-12" style={{padding:"20px 0"}}>
                        <div className="row">
                        <h3 className="text-center">Or you can...</h3>
                        <div className="container col-4 justify-content-center align-items-center text-center">
                            <h4 className="text-center">Visit my Github!</h4>
                            <a href="https://github.com/Gsandman8" target="_blank" >
                                <img src={GITHUB} alt="Github" className="img-fluid img-thumbnail rounded img-center justify-content-center align-items-center" 
                                style={{height: "150px", width:"150px", backgroundColor:"#ffe4e1", borderWidth:"1px", borderBlockColor:"#ffe4e1"}} />
                            </a>
                        </div>
                        <div className="container col-4 justify-content-center align-items-center text-center">
                            <h4 className="text-center">Visit my LinkedIn!</h4>
                            <a href="https://www.linkedin.com/in/gagesandman/" target="_blank" >
                                <img src={LINKEDIN} alt="LinkedIn" className="img-fluid img-thumbnail rounded img-center justify-content-center align-items-center"
                                style={{height: "150px", width:"150px", backgroundColor:"#ffe4e1", borderWidth:"1px", borderBlockColor:"#ffe4e1"}} />
                            </a>
                        </div>
                        <div className="container col-4 justify-content-center align-items-center text-center">
                            <h4 className="text-center">Send me an email!</h4>
                            <div >
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gage.e.sandman@gmail.com" >
                                <img src={GMAIL2} alt="Gmail" className="img-fluid img-thumbnail rounded img-center justify-content-center align-items-center"
                                style={{height: "80px", width:"100px", backgroundColor:"#ffe4e1", borderWidth:"1px", borderBlockColor:"#ffe4e1"}} />
                            </a>
                            <br/>
                            <br/>
                            <a href="mailto:gage.e.sandman@gmail.com" >
                                <img src={OUTLOOK} alt="Outlook" className="img-fluid img-thumbnail rounded img-center justify-content-center align-items-center"
                                style={{height: "100px", width:"100px", backgroundColor:"#ffe4e1", borderWidth:"1px", borderBlockColor:"#ffe4e1"}} />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;