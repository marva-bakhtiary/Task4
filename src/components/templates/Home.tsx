import { faBars } from "@fortawesome/free-solid-svg-icons";
import Icon from "../UI/atoms/Icon";
import SideBar from "../UI/organisms/SideBar";
import Form from "../UI/molecules/Form";
import Articles from "../UI/organisms/Articles";
import Button from "../UI/atoms/Button";
import Divider from "../UI/atoms/Divider";
import { useState } from "react";
import Backdrop from "../UI/atoms/Backdrop";
const Home = () => {
  const [toggleState, setToggleState] = useState(false);
  const styles = {
    wrapper: "overflow-y-scroll	overflow-x-hidden	w-full	h-full ",
    main: "w-full	px-4	mx-auto	 ",
    container:
      "ml-[400px] pt-20	px-24	pb-6 md:ml-20	md:py-16	md:w-[calc(100%-320px)]",
    pagination1: "justify-between	flex mb-[75px] mt-[100px] max-w-6xl	",
    pagination2: " px-4 max-w-[50%] flex-[0_0_50%]",
  };
  const toggleHandler = () => {
    setToggleState(!toggleState);
  };
  return (
    <div>
      <Backdrop show={toggleState} hide={toggleHandler} />

      <div className={styles.wrapper}>
        <button className="toggler" type="button" onClick={toggleHandler}>
          <Icon icon={faBars} />
        </button>
      </div>
      <aside className={toggleState ? "show" : "hide"}>
        {toggleState ? <SideBar /> : null}
        <div className="sideBar">
          <SideBar />
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
