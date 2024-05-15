import {FaExternalLinkAlt, FaGitlab} from "react-icons/fa";

export const ProjectCard = ({thumbnail, title, projectLink, description, delayOption}) => {

    return <>
        <div data-aos="fade-up" data-aos-delay={delayOption} className="col-lg-4 col-md-8 col-11 div-project-card m-2 mx-4 ps-0 custom-background-1 overflow-hidden d-flex">
            <div className="overflow-hidden w-100">
                <img className="max-height img-fluid w-100 rounded-start-1 m-0 px-0 project-thumbnail" src={thumbnail}
                     alt=""/>
            </div>
            <div className="text-center w-100 px-1">
                <h5 className="text-center py-3">{title}</h5> {/*Project's Title*/}
                <p>{description}</p>
            </div>
            <div className="position-absolute bottom-0 end-0 mb-2 me-2 text-decoration-none">
                <a className="my-text-color pe-3" href={projectLink}><FaExternalLinkAlt/></a>
                <a className="my-text-color" href={projectLink}><FaGitlab/></a>
            </div>
        </div>
    </>
}