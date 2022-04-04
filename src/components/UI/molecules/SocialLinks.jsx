const SocialLinks = (props) => {
  const styles = {
    social:
      "inline-block	bg-white text-teal-400	text-2xl	w-12	h-12	text-center	rounded pt-2	mr-1.5 mb-1.5 hover:text-sky-700	 hover:cursor-pointer	",
  };
  return (
    <nav>
      <ul>
        <li className="mb-16	pl-[75px] ">
          <a href="http://www.google.com" className={styles.social}>
            {props.social.icon}
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SocialLinks;
