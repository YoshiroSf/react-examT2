import { Fragment } from "react";
import Mensaje from "./componente/mensaje";
import cabeza from "./componente/encabezado";

function app(){
  return (
    <>
    <Mensaje />
    <cabeza
    imagen="https://humanidades.com/wp-content/uploads/2017/03/ciudad-3-e1565900111723.jpg" />
    </>
  )
}

export default app;