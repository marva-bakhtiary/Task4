const Backdrop = (props) =>
  props.show ? (
    <div
      className="w-full h-full fixed left-0 top-0 z-[100] bg-stone-400 bg-opacity-50 "
      onClick={props.hide}
    ></div>
  ) : null;
export default Backdrop;

