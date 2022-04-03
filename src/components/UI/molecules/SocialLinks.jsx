const SocialLinks = (props) => {
  return (
    <nav className="-ml-7	mb-[100px] ">
      <ul className="relative pl-[70px]">
        <li className="list-none mb-7 m-[10px]">
          <a href="http://www.google.com">{props.social.icon}</a>
        </li>
      </ul>
    </nav>
  );
};
export default SocialLinks;
