import { Fragment } from "react";
import cabeza from "./componente/encabezado";
import Mensaje from "./componente/mensaje";

function app(){
  return (
    <>
    <Mensaje />
    <cabeza />
    </>
  )
}

export default app;