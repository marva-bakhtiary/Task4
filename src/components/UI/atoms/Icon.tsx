import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
  cls?: string;
  iconShape: ;
};

const Icon = ({ cls, iconShape }: IconProps) => {
  return (
    <>
      <FontAwesomeIcon className={`text-2xl ${cls}`} icon={iconShape} />
    </>
  );
};
export default Icon;
