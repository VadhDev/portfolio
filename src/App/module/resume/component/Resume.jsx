import {useSelector} from "react-redux";
import ResumeBlock from "../../../utils/resuableComponent/ResumeBlock";
import {useEffect} from "react";

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {resume_data} = useSelector(state => state.resume);
    return (
        <div className="col-lg-9 px-0 anton-fonts m-auto pb-5">
            <h3 data-aos="fade-up" className="text-center my-text-color">Vadh<span className="text-danger">'s Resume</span> </h3>
            {
                resume_data.map(({organization, location, role, date, description}) => {
                    return <ResumeBlock key={date} title={role} location={location} timeline={date} arrayDescription={description}  />
                })
            }
        </div>

    )
}

export default Resume;