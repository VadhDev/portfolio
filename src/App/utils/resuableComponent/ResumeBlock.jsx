const ResumeBlock = ({title, location, timeline, arrayDescription, organization}) => {
    return (
        <div data-aos="fade-up" className="m-3 mb-0 custom-background-1 my-text-color p-3 " key={timeline}>
            <h5 className="hover-text">{title}</h5>
            <p className="hover-text">{timeline}</p>
            <p className="hover-text">{location}</p>
            <p className="hover-text">{organization }</p>
            <p className="hover-text">
                ◪ {arrayDescription[0]} <br/>
                ◪ {arrayDescription[1]} <br/>
                ◪ {arrayDescription[2]}
            </p>
        </div>
    )
}

export default ResumeBlock;