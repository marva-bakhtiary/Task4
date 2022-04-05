const SocialLinks = (props) => {
  const styles = {
    social:
      "inline-block	bg-white text-teal-400	text-2xl	w-10	h-10	text-center	rounded pt-2	mr-1.5 mb-1.5 hover:text-cyan-600		 hover:cursor-pointer items-center	",
  };
  return (
    <nav className="inline-block pl-5 ">
      <ul>
        <li className="mb-16 ">
          <a href="http://www.google.com" className={styles.social}>
            {props.social.icon}
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SocialLinks;
