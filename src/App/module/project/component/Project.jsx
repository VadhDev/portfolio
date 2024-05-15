import projectData from "../core/data";
import {ProjectCard} from "../../../utils/resuableComponent/ProjectCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"; // You can also use <link> for styles

const Project = () =>{

    useEffect(() => {
        setTimeout(()=>{
        window.scrollTo(0, 0);
        },100)
    }, []);

    AOS.init({
        delay: 100,
        duration: 2000,
    });
    return (
        <div className="my-text-color overflow-hidden pb-3">
            <div data-aos="fade-up" className="pb-2">
                <h3 className="text-center anton-fonts">Vadh <span className="text-danger">Worked/Working</span> On These Projects
                </h3>
            </div>
            <div className="d-flex row flex-wrap justify-content-center">
                {projectData.map((item, index) => {
                    return <ProjectCard  key={index} delayOption={100*index} title={item.title} projectLink={item.projectLink} thumbnail={item.thumbnail} description={item.description}  />;
                })}
            </div>
        </div>
    )
}

export default Project;