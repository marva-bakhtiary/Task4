import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "../UI/atoms/Icon";
import SideBar from "../UI/organisms/SideBar";
import Form from "../UI/molecules/Form";
import Articles from "../UI/organisms/Articles";
import Button from "../UI/atoms/Button";
import Divider from "../UI/atoms/Divider";

const Home = () => {
  const styles = {
    wrapper: "overflow-y-scroll	overflow-x-hidden	w-full	h-full ",
    header: "mt-[50px] mb-12",
    logo: "w-16	h-16 m-auto	rounded-full bg-white flex items-center	justify-center text-4xl	text-teal-400	",
    main: "w-full	px-4	mx-auto	 ",
    container:
      "ml-[400px] pt-20	px-24	pb-6 md:ml-20	md:py-16	md:w-[calc(100%-320px)]",
    pagination1: "justify-between	flex mb-[75px] mt-[100px] max-w-6xl	",
    pagination2: " px-4 max-w-[50%] flex-[0_0_50%]",
  };

  return (
    <div>
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
          <p className="pl-[70px]	mb-20	">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website.
            <br />
            Left side is a sticky menu bar. Right side content will scroll up
            and down.
          </p>
        </div>
      </aside>
      <div className={styles.main}>
        <section className={styles.container}>
          <Form />
          <div>
            <Articles />
          </div>
          <div className={styles.pagination1}>
            <div className={styles.pagination2}>
              <div className="inline-block">
                <Button
                  content="Prev"
                  type="default"
                  buttonType="w-32 cursor-not-allowed bg-neutral-200	text-zinc-500	hover:bg-neutral-300 underline"
                />
              </div>
              <div className="inline-block">
                <Button
                  content="Next"
                  type="default"
                  buttonType="w-32 underline hover:bg-teal-500 ml-4	"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <span>Page</span>
              <Button
                content="1"
                type="default"
                buttonType="underline w-[60px] ml-4	"
              />
              <Button
                content="2"
                type="default"
                buttonType="bg-neutral-200	text-zinc-500 hover:bg-teal-400 hover:text-white underline w-[60px] ml-4"
              />
              <Button
                content="3"
                type="default"
                buttonType="bg-neutral-200	text-zinc-500 hover:bg-teal-400 hover:text-white underline w-[60px]	ml-4"
              />
              <Button
                content="4"
                type="default"
                buttonType="bg-neutral-200	text-zinc-500 hover:bg-teal-400 hover:text-white underline w-[60px]	ml-4	"
              />
            </div>
          </div>
          <Divider commentDivide="border-t-neutral-400 border-t-2	" />
          <footer className="justify-between flex pb-6">
            <div>
              Design:
              <a
                href="www.google.com"
                className="text-teal-400 hover:text-teal-500 underline	"
              >
                TemplateMo
              </a>
            </div>
            <div className="">Copyright 2020 Xtra Blog Company Co. Ltd.</div>
          </footer>
        </section>
      </div>
    </div>
  );
};
export default Home;
