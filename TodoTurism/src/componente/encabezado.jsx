import { Fragment } from "react"

function header({imagen, nombre}){
    return(
        <>
            <div className="logo-container">
                <img src={imagen} alt={nombre} />
            </div>
        </>
    )
}

export default header