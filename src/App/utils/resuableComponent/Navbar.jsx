import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../../../assets/Logo.png";
import {NavLink, useNavigate} from "react-router-dom";

function customNavBar() {
    return <>
        <Navbar className="col-lg-8 m-auto" data-bs-theme="dark">
            <Container>
                <NavLink to="/">
                    <img className="img-fluid" src={Logo} alt="" style={{width: 130, height: 70,}}/>
                </NavLink>
                <Nav>
                    <NavLink className="text-decoration-none my-text-color px-2" to="/project">Project</NavLink>
                    <NavLink className="text-decoration-none my-text-color px-2" to="/resume">Resume</NavLink>
                    <NavLink className="text-decoration-none my-text-color px-2" to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default customNavBar;