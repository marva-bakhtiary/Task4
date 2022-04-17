import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  extraClass?: string;
  iconShape: any;
}

const Icon = ({ extraClass, iconShape }: IconProps) => {
  return (
    <div data-testid="iconID">
      <FontAwesomeIcon className={`text-2xl ${extraClass}`} icon={iconShape} />
    </div>
  );
};
export default Icon;
