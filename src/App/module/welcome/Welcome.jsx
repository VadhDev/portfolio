import {OptionBubble} from "../../utils/resuableComponent/Bubble";
import mainImage from "../../../assets/instead.gif"
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {FaReact, FaTelegram} from "react-icons/fa";

export const Welcome = () => {
    return (
        <div className="container row justify-content-center m-auto anton-fonts">
            <div className="col-md-6">
                <img className="pt-5 pt-sm-0 img-fluid" src={mainImage} alt=""/>
            </div>
            <div className="col-md-6">
                <div className="text-center m-5 pt-5 pt-sm-0">
                    <h1 className="my-text-color py-3">Khiev Vivadh</h1>
                    <h4 className="my-text-color py-2">Web Developer</h4>
                </div>
                <div>
                    <div className="my-text-color text-center spinner" style={{fontSize:"50px"}}>
                        <FaReact/>
                    </div>
                </div>
                <div className="h-50 mt-3">
                    <div className="text-center d-flex flex-wrap justify-content-center ">
                        <OptionBubble path="/project" label="Project"/>
                        <OptionBubble path="/resume" label="Resume"/>
                        <OptionBubble path="/contact" label="Contact"/>
                    </div>
                    <div className="d-flex justify-content-center mt-5 pb-3">
                        <button className="border-0 bg-transparent">
                            <a className="my-text-color" href="https://github.com/VadhDev">
                                <AiFillGithub style={{fontSize: "40px"}}/>
                            </a>
                        </button>
                        <button className="border-0 bg-transparent">
                            <a className="my-text-color" href="https://gitlab.com/khievvivadh">
                                <AiFillGitlab style={{fontSize: "40px"}}/>
                            </a>
                        </button>
                        <button className="border-0 bg-transparent">
                            <a className="my-text-color" href="https://t.me/khievvivadh">
                                <FaTelegram style={{fontSize: "40px"}}/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}