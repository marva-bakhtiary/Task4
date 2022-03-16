import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => {
  return (
    <div>
    <FontAwesomeIcon className={`text-4xl ${props.cls}`} icon={props.icon}/>
    </div>
  )
}
export default Icon
