import { useState} from "react";

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
            </div>
        </div>
    );

}

export default Contact;