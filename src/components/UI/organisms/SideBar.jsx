import {
  faComments,
  faHome,
  faPen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../atoms/Icon";
import NavLinks from "../molecules/NavLinks";
import SocialLinks from "../molecules/SocialLinks";
const SideBar = () => {
  const Links = [
    {
      id: 1,
      title: "Blog Home",
      icon: <Icon icon={faHome} cls="mr-5 pr-5" />,
    },
    {
      id: 2,
      title: "Single Post",
      icon: <Icon icon={faPen} cls="mr-5 pr-5" />,
    },
    {
      id: 3,
      title: "About Xtra",
      icon: <Icon icon={faUsers} cls="mr-5 pr-5" />,
    },
    {
      id: 4,
      title: "Contact Us",
      icon: <Icon icon={faComments} cls="mr-5 pr-5" />,
    },
  ];
  const Socials = [
    {
      id: 1,
      icon: <Icon icon={faComments} />,
    },
    {
      id: 2,
      icon: <Icon icon={faComments} />,
    },
    {
      id: 3,
      icon: <Icon icon={faComments} />,
    },
    {
      id: 4,
      icon: <Icon icon={faComments} />,
    },
  ];
  return (
    <div>
      <nav>
        {Links.map((link) => {
          return <NavLinks link={link} key={link.id} />;
        })}
      </nav>
      <nav className="flex justify-center">
        {Socials.map((social) => {
          return <SocialLinks social={social} key={social.id} />;
        })}
      </nav>
    </div>
  );
};
export default SideBar;
