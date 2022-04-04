import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Icon = (props) => {
  return (
    <>
    <FontAwesomeIcon className={`text-2xl ${props.cls}`} icon={props.icon}/>
    </>
  )
}
export default Icon
