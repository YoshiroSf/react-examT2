import { Fragment } from "react"

function cabeza({imagen}){
    return(
        <>
        <div className="Logo">
            <img src={imagen} alt="logo" />
        </div>
        </>
    );
}

export default header;