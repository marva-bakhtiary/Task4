import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Icon from "../atoms/Icon";
const Logo = () => {
  return (
    <div
      data-testid="LogoID"
      className="w-20	h-20 m-auto	items-center flex justify-center	bg-white	rounded-full"
    >
      <Icon extraClass="text-teal-400 text-5xl " iconShape={faTimes} />
    </div>
  );
};
export default Logo;
