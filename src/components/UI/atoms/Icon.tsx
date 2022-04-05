import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = ({ cls, icon }) => {
  return (
    <>
      <FontAwesomeIcon className={`text-2xl ${cls}`} icon={icon} />
    </>
  );
};
export default Icon;
