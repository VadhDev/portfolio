import {useSelector} from "react-redux";

const Resume = () => {
    const {resume_data} = useSelector(state => state.resume);
    return (
        <div className="container anton-fonts m-auto pb-2">
            {
                resume_data.map((item, index) => {
                    return <>
                        <div className="m-3 mb-0 custom-background-1 my-text-color p-3" key={index}>
                            <h5>{item.role}</h5>
                            <p>{item.date}</p>
                            <p>{item.location}</p>
                            <p>{item.organization}</p>
                            <p>
                                ◪ {item.description[0]} <br/>
                                ◪ {item.description[1]} <br/>
                                ◪ {item.description[2]}
                            </p>
                        </div>
                    </>
                })
            }
        </div>

    )
}

export default Resume;