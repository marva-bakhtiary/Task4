const Backdrop = ({ show, hide }) =>
  show ? (
    <div
      className="w-full h-full fixed left-0 top-0 z-[100] bg-stone-400 bg-opacity-50 "
      onClick={hide}
    ></div>
  ) : null;
export default Backdrop;
