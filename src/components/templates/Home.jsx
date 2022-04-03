import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "../UI/atoms/Icon";
import SideBar from "../UI/organisms/SideBar";
const Home = () => {
  const styles = {
    wrapper: "overflow-y-scroll	overflow-x-hidden	w-full	h-full ",
    header: "mt-[50px] mb-12",
    logo: "w-16	h-16 m-auto	rounded-full bg-white flex items-center	justify-center text-4xl	text-teal-400	",
  };
  return (
    <aside className="sideBar">
      <div className={styles.wrapper}>
        <button className="toggler" type="button">
          <Icon icon={faBars} />
        </button>
        <div>
          <div className={styles.header}>
            <Icon icon={faXmark} cls={styles.logo} />
          </div>
          <h1 className="text-center	font-normal	text-4xl mb-20">Xtra Blog</h1>
        </div>
        <SideBar />
      </div>
    </aside>
  );
};
export default Home;

