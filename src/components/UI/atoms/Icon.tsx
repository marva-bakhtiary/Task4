import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
  cls: string;
  icon: ;
};
const Icon = ({ cls, icon }: IconProps) => {
  return (
    <>
      <FontAwesomeIcon className={`text-2xl ${cls}`} icon={icon} />
    </>
  );
};
export default Icon;
