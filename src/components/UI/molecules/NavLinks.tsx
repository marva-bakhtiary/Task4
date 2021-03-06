interface NavlinkProps {
  link: {
    id: number;
    title: string;
    icon: JSX.Element;
  };
}
const NavLinks = ({ link }: NavlinkProps) => {
  return (
    <nav className="-ml-7	mb-[100px] ">
      <ul className="relative pl-[70px]">
        <li className="list-none mb-7 m-[10px]">
          <a
            className="text-white bg-transparent	h-7	max-w-80 w-full	flex items-center	p-7	text-2xl transition-all duration-300	ease cursor-pointer hover:li-hover"
            href="http://www.google.com"
          >
            {link.icon}
            <p className="">{link.title}</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavLinks;
