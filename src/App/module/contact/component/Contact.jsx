import {useEffect, useState} from "react";
import { FaFacebook, FaInstagram, FaTelegram} from "react-icons/fa";
import * as emailjs from "emailjs-com"
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const initialParams = {
        from_name: "Vadh",
        to_name: name,
        message: "Blah blah blah blah",
        email: email,
    }

    const [params, setParams] = useState(initialParams);

    useEffect(() => {
        setParams({
            from_name: "Vadh",
            to_name: name,
            message: email,
            email: email,
        });
    }, [name, email]);

    const handleContact = () => {
        emailjs.send('service_2zknqv3', 'template_1npdpg3', params, 'WkSxQsyN-Y7Vg5msg')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            }, (error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className="container">
            <div>
                <h3 className="anton-fonts my-text-color text-center text-decoration-underline mb-3">
                    <span className="text-danger">Contact </span>Me Through.
                </h3>
                <div className="d-flex align-items-center flex-column justify-content-center anton-fonts my-2"
                     style={{fontSize: "25px"}}>
                    <div className="my-2">
                        <a className="text-decoration-none my-text-color" href="https://www.facebook.com/profile.php?id=61552560092951">
                            <FaFacebook/> FaceBook
                        </a>
                    </div>
                    <div className="my-2">
                        <a className="text-decoration-none my-text-color" href="https://t.me/khievvivadh">
                            <FaTelegram/> Telegram
                        </a>
                    </div>
                    <div className="my-2">
                        <a className="text-decoration-none my-text-color" href="https://www.instagram.com/itsxelth/">
                            <FaInstagram/> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="anton-fonts my-text-color text-center text-decoration-underline">
                    I'll <span className="text-danger">Contact You..., </span>Leave Your Contact Here
                </h3>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <input type="text" placeholder="Name"
                           onChange={(e)=>{
                               setName(e.target.value);
                           }}
                           className="contact-input mb-2 p-1 col-9 col-md-3 anton-fonts my-text-color bg-transparent border rounded-1 me-1"/>
                    <input type="text" placeholder="Social Media / Email"
                           onChange={(e)=>{
                               setEmail(e.target.value)
                           }}
                           className="contact-input mb-2 col-9 col-md-3 anton-fonts p-1 my-text-color bg-transparent border rounded-1 me-1"/>
                </div>
                <div className="my-2 d-flex justify-content-center ">
                    <button className="contact-btn border  my-text-color rounded-2"
                            onClick={handleContact}
                    >Contact Me</button>
                </div>
            </div>
        </div>
    )
}
export default Contact