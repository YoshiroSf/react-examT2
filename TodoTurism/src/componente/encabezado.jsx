import { Fragment } from "react"

function header({imagen}){
    return(
        <>
        <div className="Logo">
            <img src={imagen} alt="logo" />
        </div>
        </>
    );
}

export default header