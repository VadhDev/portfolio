import {NavLink} from "react-router-dom";

const OptionBubble = ({path, label}) => {
    return (
        <div className="custom-background-1 py-5 px-5 mx-2 rounded-circle">
            <NavLink className="my-text-color text-decoration-none"
                     to={path}>{label}</NavLink>
        </div>
    )
}
export {OptionBubble}