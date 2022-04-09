import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  extraClass?: string;
  iconShape: any;
}

const Icon = ({ extraClass, iconShape }: IconProps) => {
  return (
    <>
      <FontAwesomeIcon className={`text-2xl ${extraClass}`} icon={iconShape} />
    </>
  );
};
export default Icon;
